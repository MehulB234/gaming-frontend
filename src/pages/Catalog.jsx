
import { useEffect, useRef, useState } from "react";
import GameCard from "../components/GameCard";
import Slideshow from "../components/Slideshow";
import "../css/Catalog.css";

const BASE_URL = "https://demo-backend-4rk5.onrender.com";

const initialForm = {
  title: "",
  imageFile: null,
  img_alt: "",
  platform: "PlayStation",
  genre: "RPG",
  price: "",
  detail_link: "",
};

const Catalog = () => {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("All");
  const [platform, setPlatform] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [imagePreview, setImagePreview] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/catalog`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const categories = [
    "All",
    "RPG",
    "Shooter",
    "Action",
    "Sports",
    "Adventure",
    "Sandbox",
  ];

  const platforms = ["All", "PlayStation", "Xbox", "PC"];
  const formPlatforms = ["PlayStation", "Xbox", "PC"];
  const formGenres = ["RPG", "Shooter", "Action", "Sports", "Adventure", "Sandbox"];

  const filteredGames = games.filter((game) => {
    const categoryMatch =
      category === "All" ||
      game.genre.toLowerCase().includes(category.toLowerCase());

    const platformMatch = platform === "All" || game.platform === platform;

    return categoryMatch && platformMatch;
  });

  const validateForm = () => {
    const newErrors = {};

    if (
      !formData.title.trim() ||
      formData.title.trim().length < 2 ||
      formData.title.trim().length > 60
    ) {
      newErrors.title = "Title must be between 2 and 60 characters.";
    }

    if (!formData.imageFile) {
      newErrors.image = "Please upload an image file.";
    } else if (!formData.imageFile.type.startsWith("image/")) {
      newErrors.image = "Only image files are allowed.";
    }

    if (
      !formData.img_alt.trim() ||
      formData.img_alt.trim().length < 2 ||
      formData.img_alt.trim().length > 100
    ) {
      newErrors.img_alt = "Image alt text must be between 2 and 100 characters.";
    }

    if (!formPlatforms.includes(formData.platform)) {
      newErrors.platform = "Please select a valid platform.";
    }

    if (!formGenres.includes(formData.genre)) {
      newErrors.genre = "Please select a valid genre.";
    }

    const priceNumber = Number(formData.price);
    if (
      formData.price === "" ||
      Number.isNaN(priceNumber) ||
      priceNumber < 0 ||
      priceNumber > 100
    ) {
      newErrors.price = "Price must be a number between 0 and 100.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setFormData(initialForm);
    setImagePreview("");
    setErrors({});

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccessMessage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      imageFile: file,
    }));

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImagePreview(file ? URL.createObjectURL(file) : "");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append("title", formData.title.trim());
      submitData.append("image", formData.imageFile);
      submitData.append("img_alt", formData.img_alt.trim());
      submitData.append("platform", formData.platform);
      submitData.append("genre", formData.genre);
      submitData.append("price", formData.price);
      submitData.append("detail_link", formData.detail_link.trim());

      const response = await fetch(`${BASE_URL}/api/catalog`, {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors({ server: data.errors.join(" ") });
        } else {
          setErrors({ server: "Unable to add game." });
        }
        return;
      }

      setGames((prev) => [...prev, data.game]);
      clearForm();
      setSuccessMessage("Game added successfully!");
      setShowForm(false);
    } catch (err) {
      console.error(err);
      setErrors({ server: "Server error. Please try again." });
    }
  };

  const handleDeleteGame = async (id, title) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${title}"?`);
    if (!confirmed) return;

    try {
      const response = await fetch(`${BASE_URL}/api/catalog/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ server: data.message || "Unable to delete game." });
        return;
      }

      setGames((prev) => prev.filter((game) => game._id !== id));
      setErrors({});
      setSuccessMessage(`"${title}" deleted successfully.`);
    } catch (err) {
      console.error(err);
      setErrors({ server: "Server error. Please try again." });
    }
  };

  return (
    <div className="catalog-page">
      <div className="catalog-wrap">
        <div className="catalog-hero">
          <Slideshow />
        </div>

        <div className="catalog-header-row">
          <button
            className="add-toggle-btn"
            onClick={() => setShowForm((prev) => !prev)}
            aria-label="Toggle add game form"
            type="button"
          >
            {showForm ? "−" : "+"}
          </button>
          <h1 className="page-title">Game Catalog</h1>
        </div>

        {showForm && (
          <section className="add-game-section">
            <div className="add-game-card">
              <h2>Add a New Game</h2>
              <p className="form-subtitle">
                Upload an image from your computer and add the game to the catalog.
              </p>

              <form className="add-game-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="title">Game Title</label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter game title"
                    />
                    {errors.title && <p className="form-error">{errors.title}</p>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="img_alt">Image Alt Text</label>
                    <input
                      id="img_alt"
                      name="img_alt"
                      type="text"
                      value={formData.img_alt}
                      onChange={handleChange}
                      placeholder="Describe the cover art"
                    />
                    {errors.img_alt && <p className="form-error">{errors.img_alt}</p>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="platform">Platform</label>
                    <select
                      id="platform"
                      name="platform"
                      value={formData.platform}
                      onChange={handleChange}
                    >
                      {formPlatforms.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {errors.platform && <p className="form-error">{errors.platform}</p>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="genre">Genre</label>
                    <select
                      id="genre"
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                    >
                      {formGenres.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {errors.genre && <p className="form-error">{errors.genre}</p>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="price">Price</label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      max="100"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="59.99"
                    />
                    {errors.price && <p className="form-error">{errors.price}</p>}
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="detail_link">Detail Link</label>
                    <input
                      id="detail_link"
                      name="detail_link"
                      type="text"
                      value={formData.detail_link}
                      onChange={handleChange}
                      placeholder="/game/9"
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="image">Upload Image</label>
                    <div className="upload-row">
                      <div className="upload-preview">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Selected preview" />
                        ) : (
                          <span>No image selected</span>
                        )}
                      </div>

                      <div className="upload-controls">
                        <input
                          ref={fileInputRef}
                          id="image"
                          name="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="upload-input"
                        />
                        <p className="upload-help">
                          Choose a JPG, PNG, or GIF from your computer.
                        </p>
                        {errors.image && <p className="form-error">{errors.image}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {errors.server && <p className="form-error form-error-global">{errors.server}</p>}
                {successMessage && <p className="form-success">{successMessage}</p>}

                <button type="submit" className="submit-game-btn">
                  Add Game to Catalog
                </button>
              </form>
            </div>
          </section>
        )}

        <div className="filter-group">
          <h2>Category</h2>
          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h2>Console</h2>
          <div className="filter-row">
            {platforms.map((plat) => (
              <button
                key={plat}
                className={`filter-btn ${platform === plat ? "active" : ""}`}
                onClick={() => setPlatform(plat)}
                type="button"
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-grid">
          {filteredGames.map((game) => (
            <GameCard
              key={game._id}
              game={game}
              onDelete={() => handleDeleteGame(game._id, game.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;