import React, { useRef } from "react";

const AddPackage = () => {
  const titleRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const packages = durationRef.current.value;
    const price = "$" + priceRef.current.value;
    const img = imageRef.current.value;

    const newPackages = { title, description, packages, price, img };
    fetch("http://localhost:5000/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackages),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Package added successfully.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-center my-5">Add Package</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4">
            {/* title */}
            <div class="mb-3 col">
              <label for="exampleFormControlInput1" class="form-label">
                Package Title
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                ref={titleRef}
                required
                placeholder="Title"
              />
            </div>
            {/* price */}
            <div class="mb-3 col">
              <label for="exampleFormControlInput1" class="form-label">
                Package Price
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                ref={priceRef}
                required
                placeholder="Price"
              />
            </div>
            {/* duration */}
            <div class="mb-3 col">
              <label for="exampleFormControlInput1" class="form-label">
                Duration
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="2 Days - 3 Nights"
                ref={durationRef}
                required
              />
            </div>
            {/* Image Url */}
            <div class="mb-3 col">
              <label for="exampleFormControlInput1" class="form-label">
                Image URL
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Image URL"
                ref={imageRef}
                required
              />
            </div>
            {/* Description */}
            <div class="mb-3 col">
              <label for="exampleFormControlInput1" class="form-label">
                Description
              </label>
              <textarea
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Description"
                ref={descriptionRef}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <input
              className="btn btn-primary"
              type="submit"
              value="Place Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
