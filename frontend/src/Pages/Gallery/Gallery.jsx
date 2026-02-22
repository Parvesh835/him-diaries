import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Gallery.css";
import { getGalleryItems } from "../../service/galleryApi";
import toast from "react-hot-toast";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error("Please log in to view the gallery.");
      navigate("/Login");
      return; // Stop execution if redirecting
    }

    const fetchGallery = async () => {
      try {
        const data = await getGalleryItems();
        // Group by district only if you want sections.
        // For a more masonry feel, we might just want to show all mixed,
        // but grouping by section is good organization.
        const groupedData = data.reduce((acc, item) => {
          const district = item.district;
          if (!acc[district]) {
            acc[district] = [];
          }
          acc[district].push(item);
          return acc;
        }, {});

        const sections = Object.keys(groupedData).map((district) => ({
          title: district,
          images: groupedData[district],
        }));

        setGalleryData(sections);
      } catch (error) {
        toast.error("Failed to load gallery");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [user, navigate]);

  const openLightbox = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;

  return (
    <div className="gallery-page">
      <div className="gallery-hero-section">
        <h1 className="gallery-hero-title">Visual Journey</h1>
        <p className="gallery-hero-subtitle">Through the lens of Himachal</p>
      </div>

      <div className="gallery-container">
        {galleryData.length === 0 ? (
          <div className="no-data">No photos found.</div>
        ) : (
          galleryData.map((section, index) => (
            <div className="gallery-section" key={index}>
              <h2 className="gallery-section-title">
                <span>{section.title}</span>
              </h2>

              <div className="gallery-grid">
                {section.images.map((item, i) => (
                  <div
                    className="gallery-item"
                    key={i}
                    onClick={() => openLightbox(item)}
                  >
                    <img src={item.img} alt={item.caption} loading="lazy" />
                    <div className="gallery-overlay">
                      <h3>{item.caption}</h3>
                      <button className="view-btn">View</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.img} alt={selectedImage.caption} />
            <div className="lightbox-caption">
              <h3>{selectedImage.caption}</h3>
              <p>{selectedImage.district}</p>
            </div>
            <button className="close-btn" onClick={closeLightbox}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
