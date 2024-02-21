import mongoose from "mongoose";
import bcrypt from "bcryptjs"


const clientSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function (v) {
            return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
        },
        message: props => `${props.value} is not a valid email!`
    },
    password: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/.test(v);
        },
        message: () => 'Password must have 1 capital letter, 1 Special Character and numbers',
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
        default: 'Select'
    },
    dob: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true,
        enum: [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
            "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
            "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
            "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
            "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
            "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Swaziland", "Ethiopia", "Fiji", "Finland",
            "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
            "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
            "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
            "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
            "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
            "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
            "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
            "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
            "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
            "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
            "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam",
            "Yemen", "Zambia", "Zimbabwe"
        ],
        default: 'Select Country'
    },
    state: {
        type: String,
        required: [true, 'Please type in your state of origin']
    },
    town: {
        type: String,
        required: [true, 'Please type in your town/LGA']
    },
    profileColor: {
        type: String,
        required: true,
    }
}});

clientSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 8);

    switch(this.gender) {
        case 'Male':
            this.profileColor = '';
            break;
        case 'Female': 
            this.profileColor = '';
            break;
        case 'Non-binary':
            this.profileColor = '';
            break;
        default:
            this.profileColor = ''

    }
    next();
});

clientSchema.methods.matchPassword = async function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password)
}

const Client = mongoose.model('Client', clientSchema)

export default Client;