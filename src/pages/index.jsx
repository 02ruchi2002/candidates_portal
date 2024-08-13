import React, { useEffect, useState } from "react";
import './style.css'
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

const details = [
    {
        name: "Rahul",
        age: 24,
        state: "Kolkata",
        companyName: "Amazon",
        role: "Software Architect",
        experience: "2 years 2 months"
    },
    {
        name: "Sakshi",
        age: 28,
        state: "Uttar Pardesh",
        companyName: "Code River",
        role: "HR Manager",
        experience: "5 years 10 months"
    },
    {
        name: "Vicky",
        age: 27,
        state: "Rajeshthan",
        companyName: "IT Genius",
        role: "Digital Marketing Manager",
        experience: "4 years 9 months"
    },
    {
        name: "Komal",
        age: 25,
        state: "Uttrakhand",
        companyName: "Amazone",
        role: "HR Coordinater",
        experience: "3 years 1 months"
    },
    {
        name: "priyanka",
        age: 28,
        state: "Delhi",
        companyName: "Google",
        role: "HR Specialist",
        experience: "5 years 0 months"
    },
    {
        name: "pooja",
        age: 29,
        state: "kolkata",
        companyName: "Code River",
        role: "Backend Engineer",
        experience: "6 years 2 months"
    },
    {
        name: "Sumit",
        age: 25,
        state: "Haryana",
        companyName: "Code Craft",
        role: "Software Developer",
        experience: "3 years 3months"
    },
    {
        name: "Aakash",
        age: 29,
        state: "Punjab",
        companyName: "Microsoft",
        role: "Java Developer",
        experience: "6 years 1 months"
    },
    {
        name: "Radhika",
        age: 24,
        state: "Mumbai",
        companyName: "Amazon",
        role: "API Lead Designer",
        experience: "2 years 5 months"
    },
    {
        name: "Geetanjali",
        age: 23,
        state: "Uttar Pardesh",
        companyName: "Data Flow",
        role: "Backend Engineer",
        experience: "1 years 8months"
    },
    {
        name: "Tulshi",
        age: 25,
        state: "Rajeshthan",
        companyName: "Data Mint",
        role: "Project Manager",
        experience: "2 years 9 months"
    },
    {
        name: "Abhinav",
        age: 29,
        state: "Mumbai",
        companyName: "Amazon",
        role: "Engineering Manager",
        experience: "5 years 8 months"
    },
    {
        name: "Rajesh",
        age: 30,
        state: "Banglore",
        companyName: "Microsoft",
        role: "Product Manager",
        experience: "7 years 7 months"
    },
    {
        name: "Kavita",
        age: 27,
        state: "Jharkhand",
        companyName: "IT Genius",
        role: "Softwear Developer",
        experience: "4 years 6 months"
    },
    {
        name: "Manoj",
        age: 32,
        state: "Madhya Pradesh",
        companyName: "Google",
        role: "Lead Designer",
        experience: "7 years 10 months"
    },
    {
        name: "Ruhi",
        age: 28,
        state: "Bihar",
        companyName: "IT Forensics",
        role: "Product Manager",
        experience: "6 years 11 months"
    },
    {
        name: "Aakshra",
        age: 24,
        state: "Himachal Pardesh",
        companyName: "Data Flow",
        role: "HR Director",
        experience: "-"
    },
    {
        name: "Khushi",
        age: 26,
        state: "Haryana",
        companyName: "Next Gen IT",
        role: "Backend Devoloper",
        experience: "4 years "
    },
    {
        name: "Rahul",
        age: 24,
        state: "kolkata",
        companyName: "Amazon",
        role: "Full Stack Devoloper",
        experience: "2 years"
    },
    {
        name: "Niranjan Kumar",
        age: 26,
        state: "Delhi",
        companyName: "Talent500",
        role: " Senior React Devoloper",
        experience: "4 years"
    },
]

const filters = {
    state: ["delhi", "mumbai", "punjab", "uttrakhand", "uttar pardesh"],
    company: ["google", "amazon", "microsoft", "talent500", "it genius", "code river", "code craft", "it forensic", "data mint", "data flow", "next gen it"],
    role: ["product manager", "software architect", "engineering manager", "software developer", "hr coordinator", "hr specialist", "hr manager", "digital marketing manager", "java developer", "software engineer", "backend engineer"],
    experience: ["1 years", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years"]
}

const handleDecreasing = () => {
    console.log("helo decreasing")
}

const sort =[
    {
        value: "increasing_age",
        label: "Increasing Age"
    },
    {
        value: "decreasing_age",
        label: "Decreasing Age"
    }
]

const Project = () => {
    const [data, setData] = useState(details)
    const [searchValue, setSearchValue] = useState("")
    const [filterData, setFelterData] = useState(filters)

    let keys = Object.keys(filterData)

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }


    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSearchBtn()

        }

    }


    const handleSearchBtn = () => {
        const searchText = searchValue.toLowerCase()
        const filteredData = data.filter((item, index) => (item.name.toString().toLowerCase().includes(searchValue) || item.age.toString().toLowerCase().includes(searchText) ||
            item.state.toString().toLowerCase().includes(searchText) || item.companyName.toString().toLowerCase().includes(searchText) ||
            item.role.toString().toLowerCase().includes(searchText) || item.experience.toString().toLowerCase().includes(searchText)
        ))

        setData(filteredData)

        console.log("filtereddata =", filteredData)
    }

    const handleCancleBtn = () => {
        // console.log("cancle")
        setData(details)
        setSearchValue("")

    }

    const handleFilters = () => {
        // console.log("helo")

    }



    const handleSorting = (e) => {
        console.log("event =",e.target.value)
        // console.log("handle short")
           if(e.target.value == "decreasing_age"){
            data.sort((itemA,itemB)=> itemB.age - itemA.age )
             
           
           }
           else if (e.target.value == "increasing_age"){
            data.sort((itemA,itemB)=>{
                return itemA.age - itemB.age
               })
           }

           setData([...data])
        //    console.log("data",data)
    }



    return (
        <div className="main-container">
            <div className="child1">
                <div className="search">
                    <div className="search-btn" onClick={handleSearchBtn}>
                        <FaSearch className="search-icon" />
                    </div>
                    <input type="text"
                        placeholder="search..."
                        onChange={(e) => handleSearch(e)}
                        value={searchValue}
                        onKeyDown={handleKeyDown} />

                    <div className="cancle-btn" onClick={handleCancleBtn}>
                        <RxCrossCircled className="cancel-icon" />
                    </div>
                </div>



                <div className="filter" onClick={handleFilters}>
                    <FaFilter /> 
                    filter
                </div>

                <div className="short-by">
                    <label htmlFor="">short by</label>
                    <select name="" id="" onChange={handleSorting}>
                    <option value="starter" selected>Starter </option>
                        {
                            sort.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)
                        }

                    </select>
                </div>



            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>State</th>
                        <th>Company Name</th>
                        <th>Role</th>
                        <th>Experence</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.state}</td>
                                <td>{item.companyName}</td>
                                <td>{item.role}</td>
                                <td>{item.experience}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Project