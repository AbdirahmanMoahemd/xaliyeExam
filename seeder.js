import dotenv from 'dotenv'
import connectDB from './config/db2.js';
import direct from './data/direct.js';
import questions from './data/questions.js';
import MQuestion from './models/multiQuestions.js';
import Question from './models/questionsModel.js';


dotenv.config()

connectDB()

const importData = async () => {
    try {
        // await MQuestion.deleteMany()

        // const createUsers = await User.insertMany(users)


        // const adminUser2 = createUsers[0]._id
        const sampleSlides = direct.map(meal => {
            return {...meal}
        })

        await Question.insertMany(sampleSlides)
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