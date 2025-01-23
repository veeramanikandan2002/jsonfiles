
let obj={}
let  allvalues=[]


const cites=
    [
        
            {
                "_id": "   Siruvapuri  ",
                "name": "   Siruvapuri  ",
                "label": "   Siruvapuri  "
            },
            {
                "_id": " Hyderabad",
                "name": " Hyderabad",
                "label": " Hyderabad"
            },
            {
                "_id": " Kanniyakumari ",
                "name": " Kanniyakumari ",
                "label": " Kanniyakumari "
            },
            {
                "_id": " Ramanathapuram",
                "name": " Ramanathapuram",
                "label": " Ramanathapuram"
            },
            {
                "_id": "Agra Division",
                "name": "Agra Division",
                "label": "Agra Division"
            },
            {
                "_id": "Ahmedabad",
                "name": "Ahmedabad",
                "label": "Ahmedabad"
            },
            {
                "_id": "Al Ain Region",
                "name": "Al Ain Region",
                "label": "Al Ain Region"
            },
            {
                "_id": "Alappuzha",
                "name": "Alappuzha",
                "label": "Alappuzha"
            },
            {
                "_id": "Alipurduar",
                "name": "Alipurduar",
                "label": "Alipurduar"
            },
            {
                "_id": "Amravati Division",
                "name": "Amravati Division",
                "label": "Amravati Division"
            },
            {
                "_id": "Amritsar",
                "name": "Amritsar",
                "label": "Amritsar"
            },
            {
                "_id": "Ananthapuramu",
                "name": "Ananthapuramu",
                "label": "Ananthapuramu"
            },
            {
                "_id": "Aranthangi",
                "name": "Aranthangi",
                "label": "Aranthangi"
            },
            {
                "_id": "Ariyalur",
                "name": "Ariyalur",
                "label": "Ariyalur"
            },
            {
                "_id": "Attappady",
                "name": "Attappady",
                "label": "Attappady"
            },
            {
                "_id": "Bagula",
                "name": "Bagula",
                "label": "Bagula"
            },
            {
                "_id": "Bangalore",
                "name": "Bangalore",
                "label": "Bangalore"
            },
            {
                "_id": "Bangalore Division",
                "name": "Bangalore Division",
                "label": "Bangalore Division"
            },
            {
                "_id": "Bangkok",
                "name": "Bangkok",
                "label": "Bangkok"
            },
            {
                "_id": "Batticaloa",
                "name": "Batticaloa",
                "label": "Batticaloa"
            },
            {
                "_id": "Belagavi",
                "name": "Belagavi",
                "label": "Belagavi"
            },
            {
                "_id": "Belgaum Division",
                "name": "Belgaum Division",
                "label": "Belgaum Division"
            },
            {
                "_id": "Bengaluru",
                "name": "Bengaluru",
                "label": "Bengaluru"
            },
            {
                "_id": "Bharuch",
                "name": "Bharuch",
                "label": "Bharuch"
            },
            {
                "_id": "Bheemili",
                "name": "Bheemili",
                "label": "Bheemili"
            },
            {
                "_id": "Bhopal",
                "name": "Bhopal",
                "label": "Bhopal"
            },
            {
                "_id": "Bikaner Division",
                "name": "Bikaner Division",
                "label": "Bikaner Division"
            },
            {
                "_id": "Burdwan Division",
                "name": "Burdwan Division",
                "label": "Burdwan Division"
            },
            {
                "_id": "Calicut",
                "name": "Calicut",
                "label": "Calicut"
            },
            {
                "_id": "Chandigarh",
                "name": "Chandigarh",
                "label": "Chandigarh"
            },
            {
                "_id": "Chatervedi",
                "name": "Chatervedi",
                "label": "Chatervedi"
            },
            {
                "_id": "Chengalpattu",
                "name": "Chengalpattu",
                "label": "Chengalpattu"
            },
            {
                "_id": "Chennai",
                "name": "Chennai",
                "label": "Chennai"
            },
            {
                "_id": "Chitradurga",
                "name": "Chitradurga",
                "label": "Chitradurga"
            },
            {
                "_id": "Chittoor",
                "name": "Chittoor",
                "label": "Chittoor"
            },
            {
                "_id": "Coimbatore",
                "name": "Coimbatore",
                "label": "Coimbatore"
            },
            {
                "_id": "Cuddalore",
                "name": "Cuddalore",
                "label": "Cuddalore"
            },
            {
                "_id": "Cuddalore ",
                "name": "Cuddalore ",
                "label": "Cuddalore "
            },
            {
                "_id": "Dehradun",
                "name": "Dehradun",
                "label": "Dehradun"
            },
            {
                "_id": "Deira",
                "name": "Deira",
                "label": "Deira"
            },
            {
                "_id": "Delaware County",
                "name": "Delaware County",
                "label": "Delaware County"
            },
            {
                "_id": "Delhi",
                "name": "Delhi",
                "label": "Delhi"
            },
            {
                "_id": "Delhi Division",
                "name": "Delhi Division",
                "label": "Delhi Division"
            },
            {
                "_id": "Dharmapuri",
                "name": "Dharmapuri",
                "label": "Dharmapuri"
            },
            {
                "_id": "Dhemaji",
                "name": "Dhemaji",
                "label": "Dhemaji"
            },
            {
                "_id": "Dindigul",
                "name": "Dindigul",
                "label": "Dindigul"
            },
            {
                "_id": "District of Columbia",
                "name": "District of Columbia",
                "label": "District of Columbia"
            },
            {
                "_id": "Dubai",
                "name": "Dubai",
                "label": "Dubai"
            },
            {
                "_id": "East Godavari",
                "name": "East Godavari",
                "label": "East Godavari"
            },
            {
                "_id": "Ernakulam",
                "name": "Ernakulam",
                "label": "Ernakulam"
            },
            {
                "_id": "Erode",
                "name": "Erode",
                "label": "Erode"
            },
            {
                "_id": "Faridabad",
                "name": "Faridabad",
                "label": "Faridabad"
            },
            {
                "_id": "Fazilka",
                "name": "Fazilka",
                "label": "Fazilka"
            },
            {
                "_id": "Firozepur Division",
                "name": "Firozepur Division",
                "label": "Firozepur Division"
            },
            {
                "_id": "Galveston County",
                "name": "Galveston County",
                "label": "Galveston County"
            },
            {
                "_id": "Gandhinagar",
                "name": "Gandhinagar",
                "label": "Gandhinagar"
            },
            {
                "_id": "Garhwal Division",
                "name": "Garhwal Division",
                "label": "Garhwal Division"
            },
            {
                "_id": "Gautam Buddh Nagar",
                "name": "Gautam Buddh Nagar",
                "label": "Gautam Buddh Nagar"
            },
            {
                "_id": "Gaya",
                "name": "Gaya",
                "label": "Gaya"
            },
            {
                "_id": "Goa",
                "name": "Goa",
                "label": "Goa"
            },
            {
                "_id": "Gorakhpur Division",
                "name": "Gorakhpur Division",
                "label": "Gorakhpur Division"
            },
            {
                "_id": "Government of Amsterdam",
                "name": "Government of Amsterdam",
                "label": "Government of Amsterdam"
            },
            {
                "_id": "Greater London",
                "name": "Greater London",
                "label": "Greater London"
            },
            {
                "_id": "Gulbarga",
                "name": "Gulbarga",
                "label": "Gulbarga"
            },
            {
                "_id": "Guntur",
                "name": "Guntur",
                "label": "Guntur"
            },
            {
                "_id": "Gurgaon",
                "name": "Gurgaon",
                "label": "Gurgaon"
            },
            {
                "_id": "Gurgaon Division",
                "name": "Gurgaon Division",
                "label": "Gurgaon Division"
            },
            {
                "_id": "Gurugram",
                "name": "Gurugram",
                "label": "Gurugram"
            },
            {
                "_id": "Guwahati ",
                "name": "Guwahati ",
                "label": "Guwahati "
            },
            {
                "_id": "Hanumakonda",
                "name": "Hanumakonda",
                "label": "Hanumakonda"
            },
            {
                "_id": "Haryana",
                "name": "Haryana",
                "label": "Haryana"
            },
            {
                "_id": "Hosur",
                "name": "Hosur",
                "label": "Hosur"
            },
            {
                "_id": "Hosur Municipality",
                "name": "Hosur Municipality",
                "label": "Hosur Municipality"
            },
            {
                "_id": "Hyderabad",
                "name": "Hyderabad",
                "label": "Hyderabad"
            },
            {
                "_id": "Indore Division",
                "name": "Indore Division",
                "label": "Indore Division"
            },
            {
                "_id": "Jabalpur Division",
                "name": "Jabalpur Division",
                "label": "Jabalpur Division"
            },
            {
                "_id": "Jaffna",
                "name": "Jaffna",
                "label": "Jaffna"
            },
            {
                "_id": "Jaipur",
                "name": "Jaipur",
                "label": "Jaipur"
            },
            {
                "_id": "Jaipur Division",
                "name": "Jaipur Division",
                "label": "Jaipur Division"
            },
            {
                "_id": "Jalandhar",
                "name": "Jalandhar",
                "label": "Jalandhar"
            },
            {
                "_id": "Junagadh",
                "name": "Junagadh",
                "label": "Junagadh"
            },
            {
                "_id": "Jurong",
                "name": "Jurong",
                "label": "Jurong"
            },
            {
                "_id": "Kadappa",
                "name": "Kadappa",
                "label": "Kadappa"
            },
            {
                "_id": "Kakkanad",
                "name": "Kakkanad",
                "label": "Kakkanad"
            },
            {
                "_id": "Kalaburagi",
                "name": "Kalaburagi",
                "label": "Kalaburagi"
            },
            {
                "_id": "Kallakurichi",
                "name": "Kallakurichi",
                "label": "Kallakurichi"
            },
            {
                "_id": "Kancheepuram",
                "name": "Kancheepuram",
                "label": "Kancheepuram"
            },
            {
                "_id": "Kanchipuram",
                "name": "Kanchipuram",
                "label": "Kanchipuram"
            },
            {
                "_id": "Kanniyakumari",
                "name": "Kanniyakumari",
                "label": "Kanniyakumari"
            },
            {
                "_id": "Kannur",
                "name": "Kannur",
                "label": "Kannur"
            },
            {
                "_id": "Kanyakumari",
                "name": "Kanyakumari",
                "label": "Kanyakumari"
            },
            {
                "_id": "Karaikal",
                "name": "Karaikal",
                "label": "Karaikal"
            },
            {
                "_id": "Karaikudi",
                "name": "Karaikudi",
                "label": "Karaikudi"
            },
            {
                "_id": "Karnal",
                "name": "Karnal",
                "label": "Karnal"
            },
            {
                "_id": "Karur",
                "name": "Karur",
                "label": "Karur"
            },
            {
                "_id": "Kasaragod",
                "name": "Kasaragod",
                "label": "Kasaragod"
            },
            {
                "_id": "Kochi",
                "name": "Kochi",
                "label": "Kochi"
            },
            {
                "_id": "Kodaikanal",
                "name": "Kodaikanal",
                "label": "Kodaikanal"
            },
            {
                "_id": "Kolhan Division",
                "name": "Kolhan Division",
                "label": "Kolhan Division"
            },
            {
                "_id": "Kolkata",
                "name": "Kolkata",
                "label": "Kolkata"
            },
            {
                "_id": "Kollam",
                "name": "Kollam",
                "label": "Kollam"
            },
            {
                "_id": "Konkan Division",
                "name": "Konkan Division",
                "label": "Konkan Division"
            },
            {
                "_id": "Kottayam",
                "name": "Kottayam",
                "label": "Kottayam"
            },
            {
                "_id": "Kozhikode",
                "name": "Kozhikode",
                "label": "Kozhikode"
            },
            {
                "_id": "Kreisfreie Stadt Berlin",
                "name": "Kreisfreie Stadt Berlin",
                "label": "Kreisfreie Stadt Berlin"
            },
            {
                "_id": "Krishna",
                "name": "Krishna",
                "label": "Krishna"
            },
            {
                "_id": "Krishnagiri",
                "name": "Krishnagiri",
                "label": "Krishnagiri"
            },
            {
                "_id": "Krishnanagar ",
                "name": "Krishnanagar ",
                "label": "Krishnanagar "
            },
            {
                "_id": "Kudappanamoodu",
                "name": "Kudappanamoodu",
                "label": "Kudappanamoodu"
            },
            {
                "_id": "Kumaon Division",
                "name": "Kumaon Division",
                "label": "Kumaon Division"
            },
            {
                "_id": "Kumbakonam",
                "name": "Kumbakonam",
                "label": "Kumbakonam"
            },
            {
                "_id": "Kurnool",
                "name": "Kurnool",
                "label": "Kurnool"
            },
            {
                "_id": "Lahora",
                "name": "Lahora",
                "label": "Lahora"
            },
            {
                "_id": "Lower Assam Division",
                "name": "Lower Assam Division",
                "label": "Lower Assam Division"
            },
            {
                "_id": "Lucknow",
                "name": "Lucknow",
                "label": "Lucknow"
            },
            {
                "_id": "Lucknow Division",
                "name": "Lucknow Division",
                "label": "Lucknow Division"
            },
            {
                "_id": "Ludhiana",
                "name": "Ludhiana",
                "label": "Ludhiana"
            },
            {
                "_id": "Madurai",
                "name": "Madurai",
                "label": "Madurai"
            },
            {
                "_id": "Mahabubnagar",
                "name": "Mahabubnagar",
                "label": "Mahabubnagar"
            },
            {
                "_id": "Malabar",
                "name": "Malabar",
                "label": "Malabar"
            },
            {
                "_id": "Malappuram",
                "name": "Malappuram",
                "label": "Malappuram"
            },
            {
                "_id": "Manali",
                "name": "Manali",
                "label": "Manali"
            },
            {
                "_id": "Manapuram ",
                "name": "Manapuram ",
                "label": "Manapuram "
            },
            {
                "_id": "Mangalore",
                "name": "Mangalore",
                "label": "Mangalore"
            },
            {
                "_id": "Maricopa County",
                "name": "Maricopa County",
                "label": "Maricopa County"
            },
            {
                "_id": "Markham",
                "name": "Markham",
                "label": "Markham"
            },
            {
                "_id": "Mayiladuthurai",
                "name": "Mayiladuthurai",
                "label": "Mayiladuthurai"
            },
            {
                "_id": "Medinipur Division",
                "name": "Medinipur Division",
                "label": "Medinipur Division"
            },
            {
                "_id": "Meerut Division",
                "name": "Meerut Division",
                "label": "Meerut Division"
            },
            {
                "_id": "Middlesex County",
                "name": "Middlesex County",
                "label": "Middlesex County"
            },
            {
                "_id": "Moonnar",
                "name": "Moonnar",
                "label": "Moonnar"
            },
            {
                "_id": "Moradabad Division",
                "name": "Moradabad Division",
                "label": "Moradabad Division"
            },
            {
                "_id": "Mumbai",
                "name": "Mumbai",
                "label": "Mumbai"
            },
            {
                "_id": "Mumbai City",
                "name": "Mumbai City",
                "label": "Mumbai City"
            },
            {
                "_id": "Mysore",
                "name": "Mysore",
                "label": "Mysore"
            },
            {
                "_id": "Mysore Division",
                "name": "Mysore Division",
                "label": "Mysore Division"
            },
            {
                "_id": "Nagapattinam",
                "name": "Nagapattinam",
                "label": "Nagapattinam"
            },
            {
                "_id": "Nagercoil",
                "name": "Nagercoil",
                "label": "Nagercoil"
            },
            {
                "_id": "Nagpur",
                "name": "Nagpur",
                "label": "Nagpur"
            },
            {
                "_id": "Nagpur Division",
                "name": "Nagpur Division",
                "label": "Nagpur Division"
            },
            {
                "_id": "Nalgonda",
                "name": "Nalgonda",
                "label": "Nalgonda"
            },
            {
                "_id": "Namakkal",
                "name": "Namakkal",
                "label": "Namakkal"
            },
            {
                "_id": "Nedumkandam",
                "name": "Nedumkandam",
                "label": "Nedumkandam"
            },
            {
                "_id": "New Delhi",
                "name": "New Delhi",
                "label": "New Delhi"
            },
            {
                "_id": "New York",
                "name": "New York",
                "label": "New York"
            },
            {
                "_id": "Neyveli",
                "name": "Neyveli",
                "label": "Neyveli"
            },
            {
                "_id": "Noida",
                "name": "Noida",
                "label": "Noida"
            },
            {
                "_id": "North Chotanagpur Division",
                "name": "North Chotanagpur Division",
                "label": "North Chotanagpur Division"
            },
            {
                "_id": "North Sikkim",
                "name": "North Sikkim",
                "label": "North Sikkim"
            },
            {
                "_id": "Northern Division",
                "name": "Northern Division",
                "label": "Northern Division"
            },
            {
                "_id": "Palakkad",
                "name": "Palakkad",
                "label": "Palakkad"
            },
            {
                "_id": "Palamel",
                "name": "Palamel",
                "label": "Palamel"
            },
            {
                "_id": "Palayam",
                "name": "Palayam",
                "label": "Palayam"
            },
            {
                "_id": "Paris",
                "name": "Paris",
                "label": "Paris"
            },
            {
                "_id": "Pathanamthitta",
                "name": "Pathanamthitta",
                "label": "Pathanamthitta"
            },
            {
                "_id": "Perambalur",
                "name": "Perambalur",
                "label": "Perambalur"
            },
            {
                "_id": "Pollachi",
                "name": "Pollachi",
                "label": "Pollachi"
            },
            {
                "_id": "Pondicherry",
                "name": "Pondicherry",
                "label": "Pondicherry"
            },
            {
                "_id": "Ponneri",
                "name": "Ponneri",
                "label": "Ponneri"
            },
            {
                "_id": "Presidency Division",
                "name": "Presidency Division",
                "label": "Presidency Division"
            },
            {
                "_id": "Puducherry",
                "name": "Puducherry",
                "label": "Puducherry"
            },
            {
                "_id": "Pudukkottai",
                "name": "Pudukkottai",
                "label": "Pudukkottai"
            },
            {
                "_id": "Pune",
                "name": "Pune",
                "label": "Pune"
            },
            {
                "_id": "Pune Division",
                "name": "Pune Division",
                "label": "Pune Division"
            },
            {
                "_id": "Raipur Division",
                "name": "Raipur Division",
                "label": "Raipur Division"
            },
            {
                "_id": "Rajkot",
                "name": "Rajkot",
                "label": "Rajkot"
            },
            {
                "_id": "Ramanathapuram",
                "name": "Ramanathapuram",
                "label": "Ramanathapuram"
            },
            {
                "_id": "Rameswaram",
                "name": "Rameswaram",
                "label": "Rameswaram"
            },
            {
                "_id": "Ranchi",
                "name": "Ranchi",
                "label": "Ranchi"
            },
            {
                "_id": "Ranipet",
                "name": "Ranipet",
                "label": "Ranipet"
            },
            {
                "_id": "Salem",
                "name": "Salem",
                "label": "Salem"
            },
            {
                "_id": "San Antonio",
                "name": "San Antonio",
                "label": "San Antonio"
            },
            {
                "_id": "San Francisco",
                "name": "San Francisco",
                "label": "San Francisco"
            },
            {
                "_id": "San Francisco County",
                "name": "San Francisco County",
                "label": "San Francisco County"
            },
            {
                "_id": "Sangrur",
                "name": "Sangrur",
                "label": "Sangrur"
            },
            {
                "_id": "Saputara",
                "name": "Saputara",
                "label": "Saputara"
            },
            {
                "_id": "Scheibbs District",
                "name": "Scheibbs District",
                "label": "Scheibbs District"
            },
            {
                "_id": "Shajhanpur",
                "name": "Shajhanpur",
                "label": "Shajhanpur"
            },
            {
                "_id": "Shimla Division",
                "name": "Shimla Division",
                "label": "Shimla Division"
            },
            {
                "_id": "Sirkazhi",
                "name": "Sirkazhi",
                "label": "Sirkazhi"
            },
            {
                "_id": "Sivaganga",
                "name": "Sivaganga",
                "label": "Sivaganga"
            },
            {
                "_id": "Sivagangai",
                "name": "Sivagangai",
                "label": "Sivagangai"
            },
            {
                "_id": "Sri Potti Sriramulu Nellore",
                "name": "Sri Potti Sriramulu Nellore",
                "label": "Sri Potti Sriramulu Nellore"
            },
            {
                "_id": "Sultanpur",
                "name": "Sultanpur",
                "label": "Sultanpur"
            },
            {
                "_id": "Suryapet",
                "name": "Suryapet",
                "label": "Suryapet"
            },
            {
                "_id": "Tabuk",
                "name": "Tabuk",
                "label": "Tabuk"
            },
            {
                "_id": "Tenkasi",
                "name": "Tenkasi",
                "label": "Tenkasi"
            },
            {
                "_id": "Thane",
                "name": "Thane",
                "label": "Thane"
            },
            {
                "_id": "Thanjavur",
                "name": "Thanjavur",
                "label": "Thanjavur"
            },
            {
                "_id": "The Regional Council of Goyder",
                "name": "The Regional Council of Goyder",
                "label": "The Regional Council of Goyder"
            },
            {
                "_id": "Theni",
                "name": "Theni",
                "label": "Theni"
            },
            {
                "_id": "Thiruchengodu",
                "name": "Thiruchengodu",
                "label": "Thiruchengodu"
            },
            {
                "_id": "Thiruvananthapuram",
                "name": "Thiruvananthapuram",
                "label": "Thiruvananthapuram"
            },
            {
                "_id": "Thiruvanmalai",
                "name": "Thiruvanmalai",
                "label": "Thiruvanmalai"
            },
            {
                "_id": "Thiruvarur",
                "name": "Thiruvarur",
                "label": "Thiruvarur"
            },
            {
                "_id": "Thoothukudi",
                "name": "Thoothukudi",
                "label": "Thoothukudi"
            },
            {
                "_id": "Thrissur",
                "name": "Thrissur",
                "label": "Thrissur"
            },
            {
                "_id": "Tiruchirappalli",
                "name": "Tiruchirappalli",
                "label": "Tiruchirappalli"
            },
            {
                "_id": "Tirunelveli",
                "name": "Tirunelveli",
                "label": "Tirunelveli"
            },
            {
                "_id": "Tirupathur",
                "name": "Tirupathur",
                "label": "Tirupathur"
            },
            {
                "_id": "Tirupattur",
                "name": "Tirupattur",
                "label": "Tirupattur"
            },
            {
                "_id": "Tiruppur",
                "name": "Tiruppur",
                "label": "Tiruppur"
            },
            {
                "_id": "Tirur",
                "name": "Tirur",
                "label": "Tirur"
            },
            {
                "_id": "Tiruvallur",
                "name": "Tiruvallur",
                "label": "Tiruvallur"
            },
            {
                "_id": "Tiruvannamalai",
                "name": "Tiruvannamalai",
                "label": "Tiruvannamalai"
            },
            {
                "_id": "Toronto",
                "name": "Toronto",
                "label": "Toronto"
            },
            {
                "_id": "Trichy",
                "name": "Trichy",
                "label": "Trichy"
            },
            {
                "_id": "Trissur",
                "name": "Trissur",
                "label": "Trissur"
            },
            {
                "_id": "Trivandrum",
                "name": "Trivandrum",
                "label": "Trivandrum"
            },
            {
                "_id": "US",
                "name": "US",
                "label": "US"
            },
            {
                "_id": "Udaipur",
                "name": "Udaipur",
                "label": "Udaipur"
            },
            {
                "_id": "Ugli",
                "name": "Ugli",
                "label": "Ugli"
            },
            {
                "_id": "Ujjain Division",
                "name": "Ujjain Division",
                "label": "Ujjain Division"
            },
            {
                "_id": "Usilampatti",
                "name": "Usilampatti",
                "label": "Usilampatti"
            },
            {
                "_id": "Utah County",
                "name": "Utah County",
                "label": "Utah County"
            },
            {
                "_id": "Uttar Dinajpur",
                "name": "Uttar Dinajpur",
                "label": "Uttar Dinajpur"
            },
            {
                "_id": "Vadodara",
                "name": "Vadodara",
                "label": "Vadodara"
            },
            {
                "_id": "Vancouver",
                "name": "Vancouver",
                "label": "Vancouver"
            },
            {
                "_id": "Varanasi",
                "name": "Varanasi",
                "label": "Varanasi"
            },
            {
                "_id": "Vellore",
                "name": "Vellore",
                "label": "Vellore"
            },
            {
                "_id": "Ventura County",
                "name": "Ventura County",
                "label": "Ventura County"
            },
            {
                "_id": "Viluppuram",
                "name": "Viluppuram",
                "label": "Viluppuram"
            },
            {
                "_id": "Virudhunagar",
                "name": "Virudhunagar",
                "label": "Virudhunagar"
            },
            {
                "_id": "Visakhapatnam",
                "name": "Visakhapatnam",
                "label": "Visakhapatnam"
            },
            {
                "_id": "Vishakhapatnam",
                "name": "Vishakhapatnam",
                "label": "Vishakhapatnam"
            },
            {
                "_id": "Wayanad",
                "name": "Wayanad",
                "label": "Wayanad"
            },
            {
                "_id": "West Godavari",
                "name": "West Godavari",
                "label": "West Godavari"
            },
            {
                "_id": "YSR District",
                "name": "YSR District",
                "label": "YSR District"
            },
            {
                "_id": "Yamuna Nagar",
                "name": "Yamuna Nagar",
                "label": "Yamuna Nagar"
            },
            {
                "_id": "agra",
                "name": "agra",
                "label": "agra"
            },
            {
                "_id": "amritsar",
                "name": "amritsar",
                "label": "amritsar"
            },
            {
                "_id": "avadi",
                "name": "avadi",
                "label": "avadi"
            },
            {
                "_id": "bangalore",
                "name": "bangalore",
                "label": "bangalore"
            },
            {
                "_id": "bangaluru",
                "name": "bangaluru",
                "label": "bangaluru"
            },
            {
                "_id": "bangalurur",
                "name": "bangalurur",
                "label": "bangalurur"
            },
            {
                "_id": "bangluru",
                "name": "bangluru",
                "label": "bangluru"
            },
            {
                "_id": "bhopal",
                "name": "bhopal",
                "label": "bhopal"
            },
            {
                "_id": "bnagaluru",
                "name": "bnagaluru",
                "label": "bnagaluru"
            },
            {
                "_id": "bombay",
                "name": "bombay",
                "label": "bombay"
            },
            {
                "_id": "burdwan",
                "name": "burdwan",
                "label": "burdwan"
            },
            {
                "_id": "californioa",
                "name": "californioa",
                "label": "californioa"
            },
            {
                "_id": "chandigarh",
                "name": "chandigarh",
                "label": "chandigarh"
            },
            {
                "_id": "chennai",
                "name": "chennai",
                "label": "chennai"
            },
            {
                "_id": "chennai ",
                "name": "chennai ",
                "label": "chennai "
            },
            {
                "_id": "chennao",
                "name": "chennao",
                "label": "chennao"
            },
            {
                "_id": "chirag",
                "name": "chirag",
                "label": "chirag"
            },
            {
                "_id": "cochin",
                "name": "cochin",
                "label": "cochin"
            },
            {
                "_id": "coimbatore",
                "name": "coimbatore",
                "label": "coimbatore"
            },
            {
                "_id": "cuddalore",
                "name": "cuddalore",
                "label": "cuddalore"
            },
            {
                "_id": "dubai",
                "name": "dubai",
                "label": "dubai"
            },
            {
                "_id": "dwarka",
                "name": "dwarka",
                "label": "dwarka"
            },
            {
                "_id": "erode",
                "name": "erode",
                "label": "erode"
            },
            {
                "_id": "gabru",
                "name": "gabru",
                "label": "gabru"
            },
            {
                "_id": "gurugram",
                "name": "gurugram",
                "label": "gurugram"
            },
            {
                "_id": "guwarati",
                "name": "guwarati",
                "label": "guwarati"
            },
            {
                "_id": "hyderabad",
                "name": "hyderabad",
                "label": "hyderabad"
            },
            {
                "_id": "jaipur",
                "name": "jaipur",
                "label": "jaipur"
            },
            {
                "_id": "kadapa",
                "name": "kadapa",
                "label": "kadapa"
            },
            {
                "_id": "kannur",
                "name": "kannur",
                "label": "kannur"
            },
            {
                "_id": "kanpur",
                "name": "kanpur",
                "label": "kanpur"
            },
            {
                "_id": "kanyakumari",
                "name": "kanyakumari",
                "label": "kanyakumari"
            },
            {
                "_id": "karol bagh",
                "name": "karol bagh",
                "label": "karol bagh"
            },
            {
                "_id": "karol bhag",
                "name": "karol bhag",
                "label": "karol bhag"
            },
            {
                "_id": "karur",
                "name": "karur",
                "label": "karur"
            },
            {
                "_id": "kerala",
                "name": "kerala",
                "label": "kerala"
            },
            {
                "_id": "kochi",
                "name": "kochi",
                "label": "kochi"
            },
            {
                "_id": "kolkata",
                "name": "kolkata",
                "label": "kolkata"
            },
            {
                "_id": "kollam",
                "name": "kollam",
                "label": "kollam"
            },
            {
                "_id": "ladakh",
                "name": "ladakh",
                "label": "ladakh"
            },
            {
                "_id": "london ",
                "name": "london ",
                "label": "london "
            },
            {
                "_id": "madurai",
                "name": "madurai",
                "label": "madurai"
            },
            {
                "_id": "manali",
                "name": "manali",
                "label": "manali"
            },
            {
                "_id": "mansa",
                "name": "mansa",
                "label": "mansa"
            },
            {
                "_id": "meerut",
                "name": "meerut",
                "label": "meerut"
            },
            {
                "_id": "moti nagar",
                "name": "moti nagar",
                "label": "moti nagar"
            },
            {
                "_id": "mumbai",
                "name": "mumbai",
                "label": "mumbai"
            },
            {
                "_id": "mysore",
                "name": "mysore",
                "label": "mysore"
            },
            {
                "_id": "nagar",
                "name": "nagar",
                "label": "nagar"
            },
            {
                "_id": "nellore",
                "name": "nellore",
                "label": "nellore"
            },
            {
                "_id": "new delhi",
                "name": "new delhi",
                "label": "new delhi"
            },
            {
                "_id": "new punjab",
                "name": "new punjab",
                "label": "new punjab"
            },
            {
                "_id": "new york",
                "name": "new york",
                "label": "new york"
            },
            {
                "_id": "noida",
                "name": "noida",
                "label": "noida"
            },
            {
                "_id": "patna",
                "name": "patna",
                "label": "patna"
            },
            {
                "_id": "pollachi",
                "name": "pollachi",
                "label": "pollachi"
            },
            {
                "_id": "pondicherry",
                "name": "pondicherry",
                "label": "pondicherry"
            },
            {
                "_id": "porur",
                "name": "porur",
                "label": "porur"
            },
            {
                "_id": "pune",
                "name": "pune",
                "label": "pune"
            },
            {
                "_id": "punjab",
                "name": "punjab",
                "label": "punjab"
            },
            {
                "_id": "raipur",
                "name": "raipur",
                "label": "raipur"
            },
            {
                "_id": "ranchi",
                "name": "ranchi",
                "label": "ranchi"
            },
            {
                "_id": "saharanpur",
                "name": "saharanpur",
                "label": "saharanpur"
            },
            {
                "_id": "salem",
                "name": "salem",
                "label": "salem"
            },
            {
                "_id": "salem ",
                "name": "salem ",
                "label": "salem "
            },
            {
                "_id": "surat",
                "name": "surat",
                "label": "surat"
            },
            {
                "_id": "texas",
                "name": "texas",
                "label": "texas"
            },
            {
                "_id": "theni",
                "name": "theni",
                "label": "theni"
            },
            {
                "_id": "thirukovillur",
                "name": "thirukovillur",
                "label": "thirukovillur"
            },
            {
                "_id": "thoothukudi",
                "name": "thoothukudi",
                "label": "thoothukudi"
            },
            {
                "_id": "tirunelveli",
                "name": "tirunelveli",
                "label": "tirunelveli"
            },
            {
                "_id": "tiruvanathapuram",
                "name": "tiruvanathapuram",
                "label": "tiruvanathapuram"
            },
            {
                "_id": "tiruvannamalai",
                "name": "tiruvannamalai",
                "label": "tiruvannamalai"
            },
            {
                "_id": "trichy",
                "name": "trichy",
                "label": "trichy"
            },
            {
                "_id": "uae",
                "name": "uae",
                "label": "uae"
            },
            {
                "_id": "vijayawada",
                "name": "vijayawada",
                "label": "vijayawada"
            },
            {
                "_id": "virudhunagar",
                "name": "virudhunagar",
                "label": "virudhunagar"
            },
            {
                "_id": "viyayawada",
                "name": "viyayawada",
                "label": "viyayawada"
            },
            {
                "_id": "yamuna",
                "name": "yamuna",
                "label": "yamuna"
            },
            {
                "_id": "yamuna nagar",
                "name": "yamuna nagar",
                "label": "yamuna nagar"
            },
            {
                "_id": "Đông Anh",
                "name": "Đông Anh",
                "label": "Đông Anh"
            },
            {
                "_id": "ᴄᴏɪᴍʙᴀᴛᴏʀᴇ",
                "name": "coimbatore",
                "label": "ᴄᴏɪᴍʙᴀᴛᴏʀᴇ"
            }
        
    ]

// const cite=[]
//    cites.forEach((elem)=>{
//        value.push(elem.name)
        
//     })
   
//     console.log(value)

const categrious =[
    {
        "_id": "Agriculture",
        "name": "Agriculture",
        "slug": "Agriculture"
    },
    {
        "_id": "Architecture & Interior",
        "name": "Architecture & Interior",
        "slug": "Architecture & Interior"
    },
    {
        "_id": "Artist",
        "name": "Artist",
        "slug": "Artist"
    },
    {
        "_id": "Astrology",
        "name": "Astrology",
        "slug": "Astrology"
    },
    {
        "_id": "Automobile",
        "name": "Automobile",
        "slug": "Automobile"
    },
    {
        "_id": "Beauty, cosmetic & personal care",
        "name": "Beauty, cosmetic & personal care",
        "slug": "Beauty, cosmetic & personal care"
    },
    {
        "_id": "Business",
        "name": "Business",
        "slug": "Business"
    },
    {
        "_id": "Cat",
        "name": "Cat",
        "slug": "Cat"
    },
    {
        "_id": "Celebrity",
        "name": "Celebrity",
        "slug": "Celebrity"
    },
    {
        "_id": "Community page",
        "name": "Community page",
        "slug": "Community page"
    },
    {
        "_id": "Cooking",
        "name": "Cooking",
        "slug": "Cooking"
    },
    {
        "_id": "Cover Dance",
        "name": "Cover Dance",
        "slug": "Cover Dance"
    },
    {
        "_id": "Cover Song",
        "name": "Cover Song",
        "slug": "Cover Song"
    },
    {
        "_id": "Crypto & NFT",
        "name": "Crypto & NFT",
        "slug": "Crypto & NFT"
    },
    {
        "_id": "Digital Creator",
        "name": "Digital Creator",
        "slug": "Digital Creator"
    },
    {
        "_id": "Dog",
        "name": "Dog",
        "slug": "Dog"
    },
    {
        "_id": "Education",
        "name": "Education",
        "slug": "Education"
    },
    {
        "_id": "Entertainment",
        "name": "Entertainment",
        "slug": "Entertainment"
    },
    {
        "_id": "Entrepreneurship",
        "name": "Entrepreneurship",
        "slug": "Entrepreneurship"
    },
    {
        "_id": "Fashion/Lifestyle",
        "name": "Fashion/Lifestyle",
        "slug": "Fashion/Lifestyle"
    },
    {
        "_id": "Film & Animation",
        "name": "Film & Animation",
        "slug": "Film & Animation"
    },
    {
        "_id": "Finance",
        "name": "Finance",
        "slug": "Finance"
    },
    {
        "_id": "Food",
        "name": "Food",
        "slug": "Food"
    },
    {
        "_id": "Gadgets & Tech",
        "name": "Gadgets & Tech",
        "slug": "Gadgets & Tech"
    },
    {
        "_id": "Gaming",
        "name": "Gaming",
        "slug": "Gaming"
    },
    {
        "_id": "Health & Fitness",
        "name": "Health & Fitness",
        "slug": "Health & Fitness"
    },
    {
        "_id": "How to & Style",
        "name": "How to & Style",
        "slug": "How to & Style"
    },
    {
        "_id": "Infotainment",
        "name": "Infotainment",
        "slug": "Infotainment"
    },
    {
        "_id": "Kid Influencer",
        "name": "Kid Influencer",
        "slug": "Kid Influencer"
    },
    {
        "_id": "Love & Romance",
        "name": "Love & Romance",
        "slug": "Love & Romance"
    },
    {
        "_id": "Memes",
        "name": "Memes",
        "slug": "Memes"
    },
    {
        "_id": "Models",
        "name": "Models",
        "slug": "Models"
    },
    {
        "_id": "Movie Review",
        "name": "Movie Review",
        "slug": "Movie Review"
    },
    {
        "_id": "Music & Singers",
        "name": "Music & Singers",
        "slug": "Music & Singers"
    },
    {
        "_id": "News & Politics",
        "name": "News & Politics",
        "slug": "News & Politics"
    },
    {
        "_id": "Nutrition",
        "name": "Nutrition",
        "slug": "Nutrition"
    },
    {
        "_id": "Parenting",
        "name": "Parenting",
        "slug": "Parenting"
    },
    {
        "_id": "People & Blogs",
        "name": "People & Blogs",
        "slug": "People & Blogs"
    },
    {
        "_id": "Pets & Animals",
        "name": "Pets & Animals",
        "slug": "Pets & Animals"
    },
    {
        "_id": "Photography",
        "name": "Photography",
        "slug": "Photography"
    },
    {
        "_id": "Sports",
        "name": "Sports",
        "slug": "Sports"
    },
    {
        "_id": "Stock Market & Trading",
        "name": "Stock Market & Trading",
        "slug": "Stock Market & Trading"
    },
    {
        "_id": "Tech and gadgets",
        "name": "Tech and gadgets",
        "slug": "Tech and gadgets"
    },
    {
        "_id": "Travel",
        "name": "Travel",
        "slug": "Travel"
    },
    {
        "_id": "Vlog",
        "name": "Vlog",
        "slug": "Vlog"
    },
    {
        "_id": "food",
        "name": "food",
        "slug": "food"
    }
]

 const citevalue=[]
 const categriousvalue=[]
for(let i of cites){
    if(i.name=="Chennai"){
     citevalue.push(i.name)
      for(let j of categrious){
        categriousvalue.push(j.name)
      }
    }
}
obj["cites"]=citevalue
obj["categerious"]=categriousvalue;
allvalues.push(obj)
// console.log(allvalues)

const links=[]




for(let i of cites){
       
      for(let j of categrious){
        if (j.name=="Film & Animation"||j.name=="Memes"||j.name=="News & Politics"||j.name=="Kid Influencer"){
        let obj2={};
        obj2["link"]=`https://pickmyad.com/influencers/${j.name}-influencers-in-${i.name.trim()}`.replace(/ /g,"_").toLowerCase()
        obj2["displayName"]=`${i.name .trim()} ${j.name.trim()} Influencer` 
        links.push(obj2)
      }


    }
    
}
// console.log(links)
console.log(JSON.stringify(links))
console.log(links.length)