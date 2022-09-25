const {sequelize} = require('./db')
const {Dogs} = require('./models/dogs')

const seedDogs = [
    {
        name : 'Lassie',
        image : '/images/lassie.png',
        purpose : 'Service Dog',
        breed : 'German Shepherd',
        color : 'Multicolor',
        size : 'Medium',
        gender : 'Male',
        tidbit : 'The great protector'
    },
    {
        name : 'Buddy',
        image : '/images/buddy.png',
        purpose : 'Service Dog',
        breed : 'Labrador',
        color : 'Gold',
        size : 'Medium',
        gender : 'Male',
        tidbit : 'Calm and compassionate'
      },
    {
        name : 'Major',
        image : '/images/major.png',
        purpose : 'Guard Dog',
        breed : 'Chihuahua',
        color : 'Brown',
        size : 'Toy',
        gender : 'Male',
        tidbit : "Best guard dog in town!"
    },
    {
        name : 'Susie',
        image : '/images/susie.png',
        purpose : 'Home Pet',
        breed : 'Poodle',
        color : 'White',
        size : 'Toy',
        gender : 'Female',
        tidbit : 'Cute as a button'
      },
      {
        name : 'Curlie',
        image : '/images/curlie.png',
        purpose : 'Home Pet',
        breed : 'Portuguese Water Dog',
        color : 'Black',
        size : 'Large',
        gender : 'Female',
        tidbit : 'I love kids'
      },
      {
        name : 'Scout',
        image : '/images/scout.png',
        purpose : 'Home Pet',
        breed : 'Beagle',
        color : 'Multicolor',
        size : 'Medium',
        gender : 'Male',
        tidbit : 'Always investigating'
      },
      {
        name : 'Snow',
        image : '/images/snow.png',
        purpose : 'Home Pet',
        breed : 'Chow Chow',
        color : 'White',
        size : 'Large',
        gender : 'Female',
        tidbit : 'Ready for an adventure'
      },
      {
        name : 'Sassy',
        image : '/images/sassy.png',
        purpose : 'Service Dog',
        breed : 'Pomeranian',
        color : 'Multicolor',
        size : 'Toy',
        gender : 'Female',
        tidbit : 'Sooo much personality!'
      },
      {
        name : 'Smokey',
        image : '/images/smokey.png',
        purpose : 'Home Pet',
        breed : 'Labrador',
        color : 'Black',
        size : 'Medium',
        gender : 'Female',
        tidbit : 'Loyalty is my strength'
      },
      
]
  
  const seeder = async () => {
    try {
      await sequelize.sync({force: true})
      await Dogs.bulkCreate(seedDogs, {validate: true})
      console.log('Seeding success!')
      
    } catch (error) {
      console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }
  }

  // seeder()
  //     .then(() => {
  //       console.log('Seeding success!')
    
  //     })
  //     .catch(err => {
  //       console.error('Oh no!! Something went wrong!')
  //       console.error(err)
  //     })

      module.exports = seeder;