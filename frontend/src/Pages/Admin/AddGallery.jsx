import React, { useState, useEffect } from "react";
import "./AddGallery.css";
import useMutation from "../../hooks/useMutation";
import {
  addGalleryItem,
  getGalleryItems,
  deleteGalleryItem,
  updateGalleryItem,
} from "../../service/galleryApi";
import toast from "react-hot-toast";

const AddGallery = () => {
  const { mutate: addItem, isLoading: isAdding } = useMutation(addGalleryItem);
  const { mutate: updateItem, isLoading: isUpdating } =
    useMutation(updateGalleryItem);
  const { mutate: deleteItem } = useMutation(deleteGalleryItem);

  const [galleryItems, setGalleryItems] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const fetchGalleryItems = async () => {
    try {
      const data = await getGalleryItems();
      setGalleryItems(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load gallery items");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const [formData, setFormData] = useState({
    caption: "",
    img: "",
    district: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateItem({ id: editingId, ...formData });
        toast.success("Photo updated successfully!");
        setEditingId(null);
      } else {
        await addItem(formData);
        toast.success("Photo added successfully!");
      }
      setFormData({ caption: "", img: "", district: "" });
      fetchGalleryItems(); // Refresh items
    } catch (error) {
      toast.error(error.message || "Failed to save photo");
    }
  };

  const handleEdit = (item) => {
    setFormData({
      caption: item.caption,
      img: item.img,
      district: item.district,
    });
    setEditingId(item._id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
      try {
        await deleteItem(id);
        toast.success("Photo deleted successfully");
        fetchGalleryItems();
      } catch (error) {
        console.log(error);
        toast.error("Failed to delete photo");
      }
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ caption: "", img: "", district: "" });
  };

  const isLoading = isAdding || isUpdating;

  return (
    <div className="add-gallery-page">
      <h2>{editingId ? "Edit Photo" : "Add New Photo"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="district"
            placeholder="District Name"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="caption"
            placeholder="Caption / Location Name"
            value={formData.caption}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={formData.img}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={isLoading} className="submit-btn">
            {isLoading ? "Saving..." : editingId ? "Update Photo" : "Add Photo"}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="gallery-list-section">
        <h3>Existing Photos</h3>
        {loadingList ? (
          <p>Loading...</p>
        ) : (
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item._id} className="gallery-card">
                <div className="gallery-card-image">
                  <img src={item.img} alt={item.caption} />
                </div>
                <div className="gallery-card-content">
                  <h4>{item.district}</h4>
                  <p>{item.caption}</p>
                </div>
                <div className="gallery-card-actions">
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddGallery;
