import art from '../../public/art.png'
import business from '../../public/business.png'
import electronics from '../../public/electronics.png'
import fashion from '../../public/fashion.png'
import health from '../../public/health.png'
import home from '../../public/home.png'
import leisure from '../../public/leisure.png'
import motors from '../../public/motors.png'
import sports from '../../public/sports.png'
import toys from '../../public/toys.png'

import electronic from "../../public/png-electronic.png"
import bicycle from "../../public/png-bicycle.png"
import fun from "../../public/png-fun.png"
import style from "../../public/png-style.png"
import sofa from "../../public/png-sofa.png"

export const Categories = [
  { image: fashion, name: 'Fashion', subCategories: ['Women\'s Clothing', 'Men\'s Clothing', 'Girls’ Clothing', 'Boys’ Clothing', 'Women\'s Shoes', 'Men\'s Shoes', 'Girls\’ Shoes', 'Boys\’ Shoes', 'Women\'s Accessories', 'Men\'s Accessories', 'Girls’ Accessories', 'Boys’ Accessories', 'Women\'s Bags & Handbags', 'Men\'s Bags & Handbags', 'Girls’ Bags & Handbags', 'Boys’ Bags & Handbags', 'Women\'s Jewelry', ]},
  { image: electronics, name: 'Electronics', subCategories: ['Cameras & Photo', 'Cell Phones, Smart Watches & Accessories', 'Computers, Tablets & Network Hardware', 'Gaming', 'Home Surveillance Systems', 'Major Appliances', 'Portable Audio', 'Smart Home Devices', 'TV, Video & Home Audio Electronics'] },
  { image: leisure, name: 'Leisure', subCategories: ['Books & Magazines', 'Movies & TV', 'Music', 'Musical Instruments & Gear', 'Video Games & Consoles', 'DVDs & Blu-ray Discs', 'Vinyl Records', 'Music CDs', 'Cassettes', 'Other Music Formats', 'Sheet Music & Song Books', 'Guitar Instruction Media', 'Percussion Instruction Media', 'Piano Instruction Media', 'String Instruction Media', 'Wind & Woodwind Instruction Media', 'Brass Instruction']},
  { image: art, name: 'Collectables & Art', subCategories: ['Antiques', 'Art & Craft Supplies', 'Collectibles', 'Coins & Paper Money', 'Dolls & Teddy Bears', 'Entertainment Memorabilia', 'Sports Memorabilia & Fan Shop', 'Stamps']},
  { image: home, name: 'Home & Garden', subCategories: ['Bathroom Accessories & Supplies', 'Bedding', 'Food & Beverages', 'Furniture', 'Greeting Cards & Party Supply', 'Holiday & Seasonal Décor', 'Home Décor', 'Home Improvement', 'Household & Cleaning Supplies', 'Kids & Teens at Home', 'Kitchen, Dining & Bar Supplies', 'Lamps, Lighting & Ceiling Fans', 'Major Appliances', 'Rugs & Carpets', 'Tools & Workshop Equipment', 'Yard, Garden & Outdoor Living']},
  { image: toys, name: 'Toys & Hobbies', subCategories: ['Action Figures', 'Beanbag Plush', 'Building Toys', 'Classic Toys', 'Collectible Card Games & Accessories', 'Diecast & Toy Vehicles', 'Educational Toys', 'Electronic, Battery & Wind-Up Toys', 'Games', 'Model Railroads & Trains', 'Models & Kits', 'Outdoor Toys & Structures', 'Preschool Toys & Pretend Play', 'Puzzles', 'Radio Control & Control Line', 'Robots, Monsters & Space Toys', 'Slot Cars', 'Stuffed Animals', 'TV & Movie Character Toys', 'Toy Soldiers', 'Vintage & Antique Toys', 'Wholesale Lots']},
  { image: sports, name: 'Sporting Goods', subCategories: ['Boxing & MMA Equipment', 'Cycling Equipment', 'Fitness, Running & Yoga Equipment', 'Golf Equipment', 'Hunting Equipment', 'Indoor Games', 'Outdoor Sports Equipment', 'Team Sports Equipment', 'Tennis & Racquet Sports Equipment', 'Water Sports Equipment', 'Winter Sports Equipment']},
  { image: health, name: 'Health & Beauty', subCategories: ['Baby Safety & Health Products', 'Bath & Body Products', 'Dental Care Products', 'Fragrances', 'Hair Care & Styling Products', 'Health Care Products', 'Makeup Products', 'Massage Equipment & Supplies', 'Medical & Mobility Products', 'Nail Care, Manicure & Pedicure Products', 'Natural & Alternative Remedies', 'Shaving & Hair Removal Products', 'Skin Care Products', 'Sun Protection & Tanning Products', 'Tattoos & Body Art Products', 'Vision Care Products', 'Vitamins & Dietary Supplements', 'Wholesale Lots']},
  { image: motors, name: 'Motors', subCategories: ['Car & Truck Parts', 'Motorcycle Parts', 'ATV, Side-by-Side & UTV Parts', 'Scooter Parts', 'Snowmobile Parts', 'Personal Watercraft Parts', 'Boat Parts', 'In-Car Technology, GPS & Security Devices', 'Car & Truck Interior Parts', 'Car & Truck Exterior Parts', 'Car & Truck Wheels, Tires & Parts', 'Car & Truck Lighting & Lamps', 'Car & Truck Safety & Security', 'Car & Truck Air Conditioning & Heating Parts', 'Car & Truck Transmission & Drivetrain Parts', 'Car & Truck Suspension & Steering Parts', 'Car & Truck Brakes & Brake Parts', 'Car & Truck Engines & Components', 'Car & Truck Exhausts & Exhaust Parts', 'Car & Truck Filters', 'Car & Truck Ignition Systems', 'Car & Truck Computers, Chips & Cruise Control Parts', 'Car & Truck Charging & Starting Systems', 'Car & Truck Cooling Systems', 'Car & Truck Decals, Emblems & License Frames', 'Car & Truck Electric Vehicle Parts', 'Car & Truck Emission Systems', 'Car & Truck Engines & Components', 'Car & Truck Exterior Mouldings & Trim', 'Car & Truck Gauges', 'Car & Truck Glass', 'Car & Truck Ignition Systems', 'Car & Truck Interior Consoles & Parts', 'Car & Truck Interior Door Panels & Parts', 'Car & Truck Interior Switches & Controls', 'Car & Truck Locks & Hardware', 'Car & Truck Pedals & Pads', 'Car & Truck Safety & Security', 'Car & Truck Seats', 'Car & Truck Seat Belts & Parts', 'Car & Truck Steering Wheels & Horns', 'Car & Truck Sun Visors', 'Car & Truck Suspension & Steering Parts', 'Car & Truck Transmission & Drivetrain Parts', 'Car & Truck Turbos, Nitrous & Superchargers', 'Car & Truck Wheels, Tires & Parts', 'Car & Truck Windshield Wiper Systems & Parts', 'Car & Truck Air Intake & Fuel Delivery Parts', 'Car & Truck Air Conditioning & Heating Parts', 'Car & Truck Brakes & Brake Parts', 'Car & Truck Charging & Starting Systems', 'Car & Truck Computers, Chips & Cruise Control Parts', 'Car & Truck Cooling Systems', 'Car & Truck Decals, Emblems & License Frames', 'Car & Truck Electric Vehicle Parts', 'Car & Truck Emission Systems']},
  { image: business, name: 'Business & Industrial', subCategories: ['Agriculture & Forestry Equipment', 'Automation, Motors & Drives', 'Building Materials & Supplies', 'Cleaning & Janitorial Supplies', 'CNC, Metalworking & Manufacturing Equipment', 'Electrical Equipment & Supplies', 'Facility Maintenance & Safety Equipment', 'Fasteners & Hardware', 'Healthcare, Lab & Dental Equipment', 'Heavy Equipment, Parts & Attachments', 'HVAC & Refrigeration Equipment', 'Hydraulics, Pneumatics, Pumps & Plumbing Equipment', 'Industrial Automation & Motion Controls', 'Light Equipment & Tools', 'Material Handling Equipment', 'Metalworking Equipment', 'Office Equipment & Supplies', 'Printing & Graphic Arts Equipment', 'Restaurant & Food Service Equipment', 'Retail & Services', 'Test, Measurement & Inspection Equipment', 'Vehicle Parts & Accessories', 'Wholesale Lots']},
]

export const userOptions = [
  'Bidding',
  'Watch List',
  'Purchases',
  'Seller Central',
  'Messages',
  'Account',
  'Addresses',
  'Payment methods',
]

export const basketOptions = [
  'Create Listing',
  'Overview',
  'Listings',
  'Orders',
  'Shipping Labels',
  'Payments',
  'Settings',
  'Performance',
]

export const footerMenu = [
  { name: 'But', subMenu: ['Registration', 'NichoShop Buyer Protection', 'Bidding & buying help'] },
  { name: 'Sell', subMenu: ['Start selling', 'Learn to sell', 'NichoShop Seller Protection'] },
  { name: 'About NichoShop', subMenu: ['Company info', 'News', 'Careers', 'Policy']},
  { name: 'Help & Contact', subMenu: ['Help Topic', 'Contact Us', 'Report a problem']},
]

export const products = {
  id: 1,
  name: 'Product 1',
  description: 'This is a product description',
  price: 10699,
  quantity: 10,
  images: art,
  ratings: 4.6,
  reviews: 126,
  orders: 456,
  condition: 'Used',
  color: ['black', 'white', 'blue', 'red'],
  size: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
}


export const banners = [
  {
    title: "Sporting and enjoy",
    description: "Find everything you are looking for, with great deals ",
    image: bicycle,
    href: "Sporting Goods"
  },
  {
    title: "It's time for fun",
    description: "Find everything you are looking for, with great deals ",
    image: fun,
    href: "Toys & Hobbies",
    variant: "warning"
  },
  {
    title: "Live in style",
    description: "Find everything you are looking for, with great deals ",
    image: style,
    href: "Fashion",
    variant: "info"
  },
  {
    title: "Get the best deals",
    description: "Find everything you are looking for, with great deals ",
    image: sofa,
    href: "Home & Garden",
    variant: "ligth"
  },
  {
    title: "Looking for Electronics?",
    description: "Find everything you are looking for, with great deals ",
    image: electronic,
    href: "Electronics",
    variant: "purpul"
  }
];
