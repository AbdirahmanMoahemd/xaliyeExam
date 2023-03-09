import dotenv from 'dotenv'
import users from './data/users.js';
import meals from './data/meals.js';
import mealcats from './data/mealcats.js';
import restaurants from './data/restaurants.js';
import User from './models/userModel.js';
import connectDB from './config/db2.js';
import Meal from './models/mealModel.js';
import MealCategory from './models/mealcategoryModel.js';
import Restaurant from './models/restaurantsModel.js';


dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Restaurant.deleteMany()

        const createUsers = await User.insertMany(users)


        const adminUser2 = createUsers[0]._id
        const sampleSlides = restaurants.map(meal => {
            return {...meal, user: adminUser2}
        })

        await Restaurant.insertMany(sampleSlides)
        console.log('Data Imported! '.green.inverse)
        process.exit()
 
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await Oder.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        
        console.log('Data Destroyed! '.red.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] == '-d') {
    destroyData()
}
else {
    importData()
}