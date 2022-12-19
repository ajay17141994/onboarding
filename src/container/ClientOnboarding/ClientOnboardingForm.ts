export default {
    title:"Please enter your details",
    formComponent:[
        {
            inputType:"text",
            name:"shopName",
            placeholder:"Enter Shop Owner Name",
            title:"Shop Owner Name",
            regex:"([a-zA-Z]{3,30}\\s*)+"
        },
        {
            inputType:"email",
            name:"email",
            placeholder:"Enter your email",
            title:"Email Address"

        },
        {
            inputType:"text",
            name:"aadhar",
            placeholder:"Enter your Aadhar Number",
            title:"Aadhar Number",
            regex:"^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"

        },
        {
            inputType:"text",
            name:"panCard",
            placeholder:"Enter your Pan Card",
            title:"Pan number",
            regex:"[a-zA-Z]{3}[PCHFATBLJG]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}",
            maxLength:10,
            minLength:10

        },
        {
            inputType:"customized",
            name:"dob",
            placeholder:"Enter DOB",
            regex:"[a-zA-Z]{3}[PCHFATBLJG]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}",
            title:"Enter DOB",
            dependencies:'panCard'

        }
]
}