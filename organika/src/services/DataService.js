import axios from "axios";
export const catalog = [
    {
        'title':'Banana',
        'image':'/images/banana.jpg',
        'price':12.32,
        'category':'Fruit',
        '_id':'131298'
    },
    {
        'title':'Orange',
        'image':'/images/orange.jpg',
        'price':9.89,
        'category':'Fruit',
        '_id':'163278'
    },
    {
        'title':'Grapes',
        'image':'/images/grapes.jpg',
        'price':8.39,
        'category':'Fruit',
        '_id':'837465'
    },
    {
        'title':'Pears',
        'image':'/images/pears.jpg',
        'price':5.76,
        'category':'Fruit',
        '_id':'938272'
    },
    {
        'title':'Pomegranate',
        'image':'/images/pomegranate.jpg',
        'price':3.56,
        'category':'Fruit',
        '_id':'928364'
    },
    {
        'title':'Apple',
        'image':'/images/apple.jpg',
        'price':5.01,
        'category':'Fruit',
        '_id':'059483'
    },
    {
        'title':'Stawberries',
        'image':'/images/strawberries.jpg',
        'price':12.90,
        'category':'Fruit',
        '_id':'958675'
    },
    {
        'title':'Blueberries',
        'image':'/images/blueberries.jpg',
        'price':6.49,
        'category':'Fruit',
        '_id':'162748'
    },
    {
        'title':'Cherries',
        'image':'/images/cherries.jpg',
        'price':7.20,
        'category':'Fruit',
        '_id':'985736'
    },
    {
        'title':'Steak',
        'image':'/images/steak.jpg',
        'price':20.39,
        'category':'Meat',
        '_id':'284756'
    },
    {
        'title':'Chicken',
        'image':'/images/chicken.jpg',
        'price':18.09,
        'category':'Meat',
        '_id':'567483'
    },
    {
        'title':'Lamb',
        'image':'/images/lamb.jpg',
        'price':14.09,
        'category':'Meat',
        '_id':'857364'
    },
    {
        'title':'Porkchop',
        'image':'/images/pork.jpg',
        'price':16.98,
        'category':'Meat',
        '_id':'489590'
    },
    {
        'title':'Bacon',
        'image':'/images/bacon.jpg',
        'price':3.90,
        'category':'Meat',
        '_id':'928375'
    },
    {
        'title':'Ground Beef',
        'image':'/images/beef.jpg',
        'price':10.67,
        'category':'Meat',
        '_id':'763345'
    },
    {
        'title':'Turkey',
        'image':'/images/turkey.jpg',
        'price':18.09,
        'category':'Meat',
        '_id':'228867'
    },
    {
        'title':'Salmon',
        'image':'/images/salmon.jpg',
        'price':12.12,
        'category':'Fish',
        '_id':'883456'
    },
    {
        'title':'Shrimp',
        'image':'/images/shrimp.jpg',
        'price':4.98,
        'category':'Fish',
        '_id':'230096'
    },
    {
        'title':'Tuna',
        'image':'/images/tuna.jpg',
        'price':10.89,
        'category':'Fish',
        '_id':'882467'
    },
    {
        'title':'Yellowtail',
        'image':'/images/yellowtail.jpg',
        'price':7.02,
        'category':'Fish',
        '_id':'667833'
    },
    {
        'title':'Cod',
        'image':'/images/cod.jpg',
        'price':8.88,
        'category':'Fish',
        '_id':'448933'
    },
    {
        'title':'Halibut',
        'image':'/images/halibut.jpg',
        'price':8.30,
        'category':'Fish',
        '_id':'882122'
    },
    {
        'title':'Carrot',
        'image':'/images/carrot.jpg',
        'price':2.00,
        'category':'Vegetable',
        '_id':'992344'
    },
    {
        'title':'Onion',
        'image':'/images/onion.jpg',
        'price':2.40,
        'category':'Vegetable',
        '_id':'938554'
    },
    {
        'title':'Tomato',
        'image':'/images/tomato.jpg',
        'price':1.98,
        'category':'Vegetable',
        '_id':'449387'
    },
    {
        'title':'Squash',
        'image':'/images/squash.jpg',
        'price':4.32,
        'category':'Vegetable',
        '_id':'559380'
    },
    {
        'title':'Cucumber',
        'image':'/images/cucumber.jpg',
        'price':2.30,
        'category':'Vegetable',
        '_id':'230477'
    },
    {
        'title':'Corn',
        'image':'/images/corn.jpg',
        'price':5.42,
        'category':'Vegetable',
        '_id':'882343'
    },
    {
        'title':'Peas',
        'image':'/images/peas.jpg',
        'price':1.00,
        'category':'Vegetable',
        '_id':'119022'
    },
    {
        'title':'Broccoli',
        'image':'/images/broccoli.jpg',
        'price':1.99,
        'category':'Vegetable',
        '_id':'229087'
    },
    {
        'title':'Yam',
        'image':'/images/yam.jpg',
        'price':3.09,
        'category':'Vegetable',
        '_id':'902234'
    },
    {
        'title':'Orange Juice',
        'image':'/images/orangejuice.jpg',
        'price':1.09,
        'category':'Juice',
        '_id':'002933'
    },
    {
        'title':'Apple Juice',
        'image':'/images/applejuice.jpg',
        'price':1.09,
        'category':'Juice',
        '_id':'834522'
    },
    {
        'title':'Cranberry Juice',
        'image':'/images/cranberryjuice.jpg',
        'price':1.09,
        'category':'Juice',
        '_id':'889333'
    },
    {
        'title':'Tomato Juice',
        'image':'/images/tomatojuice.jpg',
        'price':1.09,
        'category':'Juice',
        '_id':'349999'
    }
];


export const categories = ['Fruit', "Meat", 'Fish', 'Vegetable', 'Juice'];

class DataService {

    async getProducts(){
        let response = await axios.get("http://127.0.0.1:5000/api/products");
        return response.data;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }
}

export default new DataService();