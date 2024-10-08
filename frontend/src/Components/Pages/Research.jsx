import React, {useState} from 'react';
import Projects from "../../Assets/Demmo";

const Sidebar = () => {

      const [location, setLocation] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
  ]

  const handleLocationChange = (event) => {
    const value = event.target.value
    setLocation(value)

    if (value.length > 0) {
      const filteredSuggestions = states.filter(state =>
        state.toLowerCase().startsWith(value.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion)
    setSuggestions([])
  }
    const [projectStatus, setProjectStatus] = useState({
    ongoing: false,
    completed: false,
    upcoming: false,
  })

  const handleStatusChange = (event) => {
    setProjectStatus({
      ...projectStatus,
      [event.target.name]: event.target.checked,
    })
  }

  return (
  <div className="w-64 h-3/4 bg-gray-100 p-4 rounded-md sticky top-4 shadow-md">
    <h2 className="text-lg font-bold mb-2">Filters</h2>
    <hr className='border-2 mb-2' />
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Project Status</h3>
      <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="ongoing"
              checked={projectStatus.ongoing}
              onChange={handleStatusChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Ongoing</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              name="completed"
              checked={projectStatus.completed}
              onChange={handleStatusChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Completed</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              name="upcoming"
              checked={projectStatus.upcoming}
              onChange={handleStatusChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Upcoming</span>
          </label>
        </div>
    </div>

    <div className="mb-4">
      <h3 className="font-semibold mb-2">Research Area</h3>
      <select name="ResearchAreaSelect" id="ResearchAreaSelect" className='w-3/4 border rounded'>
        <option value="">Select Research Area</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Environment">Environment</option>
        <option value="Technology">Technology</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="mb-4">
      <h3 className="font-semibold mb-2">Funding Source</h3>
      <select name="FundSelect" id="FundSelect" className='w-3/4 border rounded'>
        <option value="">Select Funding Source</option>
        <option value="Government">Government</option>
        <option value="Private">Private</option>
        <option value="IndustryPartners">Industry Partners</option>
        <option value="Uiversities">Universities</option>
        <option value="Other">Other</option>
      </select>
    </div>

     <div className="mb-4">
        <h3 className="font-semibold mb-2">Geographical Location</h3>
        <div className="relative">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className="w-full p-2 border rounded"
            placeholder="Enter state..."
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-40 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
    </div>

  </div>
  )
}

const Research = () => {
  return (
    <div className="container mx-auto mt-8 flex">
      <Sidebar />
      <div className="flex-grow ml-8 w-64">
        <div className="shadow-md rounded-md p-4 flex flex-col gap-4">
          {Projects.map((item, index) => (
            <div
              key={index}
              className="article-item mb-4 p-4 border border-gray-300 rounded"
            >
               <div className="flex flex-col ">
                <div className='w-full flex justify-between'>
                  <h2 className="text-xl font-bold">{item.ProjectTitle}</h2>
                  <p className="text-sm text-gray-600">{item.ProjectStatus}</p>
                </div>
                <div className='flex text-xs text-grey-300'>
                  <p>{item.ListedBy} posted this on {item.UploadedDate}</p>
                </div>
                <p className="text-sm text-gray-600 font-semibold">Field: {item.ResearchArea}</p>
                <p className="text-sm text-gray-600 font-semibold">Funding: {item.FundingSource}</p>
                <p className="text-sm text-gray-600">{item.Description}</p>
                <div className='flex justify-between text-sm text-gray-600 mt-4'>
                  <div>
                    <p className='font-semibold'>Location: {item.GeographicalLocation}</p>
                  </div>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>View More</button>
                </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Research