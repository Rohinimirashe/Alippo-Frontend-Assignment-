import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [deletePopup, setDeletePopup] = useState(false);

  const editValue = (key) => {
    setSelectedCountry({ ...countries[key] });
    setShowPopup(true);
  };

  const deleteValue = (key) => {
    setSelectedCountry({ ...countries[key] });
    setDeletePopup(true);
  };

  const handleSave = () => {
    console.log("Selected Country:", selectedCountry);

    const updatedCountries = countries.map((country) =>
      country.id === selectedCountry.id ? selectedCountry : country.id
    );
    console.log("Updated Countries:", updatedCountries);
    setCountries(updatedCountries);
    setShowPopup(false);
  };
  
  
  

  const handleDelete = () => {
    const updatedCountries = countries.filter(
      (country) => country.id !== selectedCountry.id
    );
    setCountries(updatedCountries);
    setDeletePopup(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://assets.alippo.com/catalog/static/data.json'
      );
      const data = await response.json();

      // Update the countries with additional serial numbers
      const countriesWithSerialNumber = data.map((country, index) => ({
        ...country,
        serialNumber: index + 1,
        // console.log(countries,"All");
      }));

      setCountries(countriesWithSerialNumber);
    };

    // Call the function
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Table Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>name</th>
            <th>age</th>
            <th>city</th>
            <th>pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, key) => (
            <tr key={key}>
              <td className="table-data">{country.serialNumber}</td>
              <td className="table-data">{country.name}</td>
              <td className="table-data">{country.age}</td>
              <td className="table-data">{country.city}</td>
              <td className="table-data">{country.pinCode}</td>
              <td className="table-data">
                <button onClick={() => editValue(key)}>Edit</button>
                <button onClick={() => deleteValue(key)}>Delete</button>
              </td>
            </tr>
          ))}
          {showPopup && (
            <div className="popup">
              <div className="row">
                {/* <label>Name:</label> */}
                <input
                  type="text"
                  value={selectedCountry ? selectedCountry.name : ""}
                  onChange={(e) =>
                    setSelectedCountry({
                      ...selectedCountry,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              {/* Add other form fields as needed */}
              <div className="row">
                <button onClick={() => setShowPopup(false)}>Cancel</button>
                <button onClick={handleSave}>Save</button>
              </div>
            </div>
          )}
          {deletePopup && (
            <div className="popup">
              <div className="row">
                <p>
                  Are you sure you want to delete{' '}
                  {selectedCountry ? selectedCountry.name : ''}?
                </p>
              </div>
              <div className="row1">
                <button onClick={() => setDeletePopup(false)}>Cancel</button>
                <button onClick={handleDelete}>Confirm</button>
              </div>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}
