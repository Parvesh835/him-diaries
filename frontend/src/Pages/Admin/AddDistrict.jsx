import React, { useState, useEffect } from "react";
import "./AddDistrict.css";
import useMutation from "../../hooks/useMutation";
import {
  createDistrict,
  getAllDistricts,
  deleteDistrict,
  updateDistrict,
} from "../../service/districtApi";
import toast from "react-hot-toast";

const AddDistrict = () => {
  const { mutate: create, isLoading: isCreating } = useMutation(createDistrict);
  const { mutate: update, isLoading: isUpdating } = useMutation(updateDistrict);
  const { mutate: remove } = useMutation(deleteDistrict);

  const [districts, setDistricts] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const fetchDistricts = async () => {
    try {
      const data = await getAllDistricts();
      setDistricts(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load districts");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchDistricts();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    img: "",
    desc: "",
    area: "",
    population: "",
    tehsils: "",
    highestPeak: "",
    sections: [],
    attractions: [],
  });

  const [sectionInput, setSectionInput] = useState({ title: "", content: "" });
  const [attractionInput, setAttractionInput] = useState({
    name: "",
    img: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addSection = () => {
    if (sectionInput.title && sectionInput.content) {
      setFormData((prev) => ({
        ...prev,
        sections: [...prev.sections, sectionInput],
      }));
      setSectionInput({ title: "", content: "" });
    }
  };

  const removeSection = (index) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const addAttraction = () => {
    if (attractionInput.name && attractionInput.img && attractionInput.desc) {
      setFormData((prev) => ({
        ...prev,
        attractions: [...prev.attractions, attractionInput],
      }));
      setAttractionInput({ name: "", img: "", desc: "" });
    }
  };

  const removeAttraction = (index) => {
    setFormData((prev) => ({
      ...prev,
      attractions: prev.attractions.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await update({ id: editingId, ...formData });
        toast.success("District updated successfully");
        setEditingId(null);
      } else {
        await create(formData);
        toast.success("District created successfully");
      }

      fetchDistricts(); // Refresh list
      // Reset form
      setFormData({
        name: "",
        img: "",
        desc: "",
        area: "",
        population: "",
        tehsils: "",
        highestPeak: "",
        sections: [],
        attractions: [],
      });
    } catch (error) {
      toast.error(error.message || "Failed to save district");
    }
  };

  const handleEdit = (district) => {
    setEditingId(district._id);
    setFormData({
      name: district.name,
      img: district.img,
      desc: district.desc,
      area: district.area,
      population: district.population,
      tehsils: district.tehsils,
      highestPeak: district.highestPeak,
      sections: district.sections || [],
      attractions: district.attractions || [],
    });
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this district?")) {
      try {
        await remove(id);
        toast.success("District deleted successfully");
        fetchDistricts();
      } catch (error) {
        console.log(error)
        toast.error("Failed to delete district");
      }
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: "",
      img: "",
      desc: "",
      area: "",
      population: "",
      tehsils: "",
      highestPeak: "",
      sections: [],
      attractions: [],
    });
  };

  const isLoading = isCreating || isUpdating;

  return (
    <div className="add-district-page">
      <h2>{editingId ? "Edit District" : "Add New District"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="District Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={formData.img}
            onChange={handleChange}
            required
          />
          <textarea
            name="desc"
            placeholder="Short Description"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="area"
            placeholder="Area (e.g. 1,167 sq km)"
            value={formData.area}
            onChange={handleChange}
          />
          <input
            type="text"
            name="population"
            placeholder="Population"
            value={formData.population}
            onChange={handleChange}
          />
          <input
            type="text"
            name="tehsils"
            placeholder="Number of Tehsils"
            value={formData.tehsils}
            onChange={handleChange}
          />
          <input
            type="text"
            name="highestPeak"
            placeholder="Highest Peak"
            value={formData.highestPeak}
            onChange={handleChange}
          />
        </div>

        {/* Dynamic Sections */}
        <div className="dynamic-section">
          <h3>Sections (History, Geography, etc.)</h3>
          <input
            type="text"
            placeholder="Title"
            value={sectionInput.title}
            onChange={(e) =>
              setSectionInput({ ...sectionInput, title: e.target.value })
            }
          />
          <textarea
            placeholder="Content"
            value={sectionInput.content}
            onChange={(e) =>
              setSectionInput({ ...sectionInput, content: e.target.value })
            }
          />
          <button type="button" onClick={addSection}>
            Add Section
          </button>
          <ul>
            {formData.sections.map((sec, index) => (
              <li key={index}>
                <b>{sec.title}</b>: {sec.content.substring(0, 50)}...
                <button
                  type="button"
                  onClick={() => removeSection(index)}
                  className="remove-btn"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="dynamic-section">
          <h3>Attractions</h3>
          <input
            type="text"
            placeholder="Name"
            value={attractionInput.name}
            onChange={(e) =>
              setAttractionInput({ ...attractionInput, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={attractionInput.img}
            onChange={(e) =>
              setAttractionInput({ ...attractionInput, img: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            value={attractionInput.desc}
            onChange={(e) =>
              setAttractionInput({ ...attractionInput, desc: e.target.value })
            }
          />
          <button type="button" onClick={addAttraction}>
            Add Attraction
          </button>
          <ul>
            {formData.attractions.map((attr, index) => (
              <li key={index}>
                <b>{attr.name}</b>
                <button
                  type="button"
                  onClick={() => removeAttraction(index)}
                  className="remove-btn"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="form-actions">
          <button type="submit" disabled={isLoading} className="submit-btn">
            {isLoading
              ? "Saving..."
              : editingId
                ? "Update District"
                : "Create District"}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="district-list-section">
        <h3>Existing Districts</h3>
        {loadingList ? (
          <p>Loading...</p>
        ) : (
          <div className="district-grid">
            {districts.map((d) => (
              <div key={d._id} className="district-card">
                <div className="district-card-image">
                  <img src={d.img} alt={d.name} />
                  <div className="district-badge">{d.name}</div>
                </div>
                <div className="district-card-content">
                  <div className="district-info-row">
                    <span>Area:</span> <strong>{d.area}</strong>
                  </div>
                  <div className="district-info-row">
                    <span>Pop:</span> <strong>{d.population}</strong>
                  </div>
                  <p className="district-desc">{d.desc ? d.desc.substring(0, 60) + "..." : ""}</p>
                </div>
                <div className="district-card-actions">
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(d)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(d._id)}
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

export default AddDistrict;
