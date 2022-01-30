import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div>
        <div class="form">
        <div class="form-text">
            <h1>ace of science</h1>
            <h2>Feel free to learn,spread what you have learned</h2>
            <h4><i class="animate-bounce fas fa-user-astronaut"></i></h4>
            <h5>এখনই অ্যাকাউন্ট তৈরি করুন</h5>
        </div>
        <div class="form-input">
            <h1><i class="fas fa-microscope"></i></h1>
            <form action="" method="get">
                <input type="text" placeholder="আপনার নাম লিখুন " /><br />

                <input type="email" placeholder="ইমেইল লিখুন " /><br />
                <input type="password" placeholder="পাসওয়ার্ড সেট করুন " /><br />
                <input type="password" placeholder="পুনরায় পাসওয়ার্ড লিখুন " /><br />
                <select>
                    <option value="Select">|--আপনার জেলা নির্বাচন করুন --|</option>
                    <option value="">Barguna District</option>
                    <option value="">Barisal District</option>
                    <option value="">Bhola District</option>
                    <option value="">Jhalokati District</option>
                    <option value="">Patuakhali District</option>
                    <option value="">Pirojpur District</option>
                    <option value="">Bandarban District</option>
                    <option value="">Brahmanbaria District</option>
                    <option value="">Chandpur District</option>
                    <option value="">Chittagong District</option>
                    <option value="">Comilla District</option>
                    <option value="">Cox's Bazar District</option>
                    <option value="">Feni District</option>
                    <option value="">Khagrachhari District</option>
                    <option value="">Lakshmipur District</option>
                    <option value="">Noakhali District</option>
                    <option value="">Rangamati District</option>
                    <option value="">Dhaka District</option>
                    <option value="">Faridpur District</option>
                    <option value="">Gazipur District</option>
                    <option value="">Gopalganj District</option>
                    <option value="">Kishoreganj District</option>
                    <option value="">Madaripur District</option>
                    <option value="">Manikganj District</option>
                    <option value="">Munshiganj District</option>
                    <option value="">Narayanganj District</option>
                    <option value="">Narsingdi District</option>
                    <option value="">Rajbari District</option>
                    <option value="">Shariatpur District</option>
                    <option value="">Tangail District</option>
                    <option value="">Bagerhat District</option>
                    <option value="">Chuadanga District</option>
                    <option value="">Jessore District</option>
                    <option value="">Jhenaidah District</option>
                    <option value="">Khulna District</option>
                    <option value="">Kushtia District</option>
                    <option value="">Magura District</option>
                    <option value="">Meherpur District</option>
                    <option value="">Narail District</option>
                    <option value="">Satkhira District</option>
                    <option value="">Jamalpur District</option>
                    <option value="">Mymensingh District</option>
                    <option value="">Netrokona District</option>
                    <option value="">Sherpur District</option>
                    <option value="">Bogra District</option>
                    <option value="">Joypurhat District</option>
                    <option value="">Naogaon District</option>
                    <option value="">Natore District</option>
                    <option value="">Chapainawabganj District</option>
                    <option value="">Pabna District</option>
                    <option value="">Rajshahi District</option>
                    <option value="">Sirajganj District</option>
                    <option value="">Dinajpur District</option>
                    <option value="">Gaibandha District</option>
                    <option value="">Kurigram District</option>
                    <option value="">Lalmonirhat District</option>
                    <option value="">Nilphamari District</option>
                    <option value="">Panchagarh District</option>
                    <option value="">Rangpur District</option>
                    <option value="">Thakurgaon District</option>
                    <option value="">Habiganj District</option>
                    <option value="">Moulvibazar District</option>
                    <option value="">Sunamganj District</option>
                    <option value="">Sylhet District</option></select
                ><br />
                <button class="shadow-2xl shadow-indigo-500/50">সাইন-আপ</button>
            </form>
        </div>
    </div>
        </div>
    );
};

export default Signup;