const json2query = require('../lib');
const { cardSlide, user } = require('./data');

describe('mysql converter', () => {
  test('should convert json to query', () => {
    const userQuery = `Create Table If Not Exists Users (name VARCHAR(6), height DOUBLE, age INT, cellPhone VARCHAR(20)); Insert Into Users Values ("jack", "174.2", "27", "010-0000-0000"), ("haena", "164.5", "26", "010-0000-0000"), ("mark", "174.2", "27", NULL), (NULL, "174.0", "27", "010-0000-0000");`;
    const cardslideQuery = `Create Table If Not Exists CardSlides (category VARCHAR(6), tag VARCHAR(29), tagColor VARCHAR(11), title VARCHAR(68), article VARCHAR(257), linkTitle VARCHAR(33), link VARCHAR(33), imageURL VARCHAR(159)); Insert Into CardSlides Values ("ship", "FAST, FREE DELIVERY", "#00A8E1", "Fast, FREE delivery on over 100 million items", "Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life. Plus, Prime members get FREE One-Day Delivery on tens of millions of items.", "Explore Prime Delivery", "https://www.amazon.com", "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A01._CB514650866_.jpg"), ("ship", "SAME-DAY DELIVERY", "#00A8E1", "FREE Same-Day Delivery", "Prime members get FREE Same-Day Delivery on over three million items with qualifying orders.", "Explore Same-Day Delivery", "https://www.amazon.com", "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A02._CB514650866_.jpg"), ("ship", "RELEASE DAY DELIVERY", "#00A8E1", "Skip the lines and get it on release day", "No more waiting in line! Choose Free Release-Date Delivery at checkout on qualified items, and your package will be delivered on the release day by 7pm.", "Explore Release-Date Delivery", "https://www.amazon.com", "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A03._CB514650829_.jpg"), ("ship", "PRIME NOW", "#00A8E1", "Ultrafast delivery on thousands of items", "Prime Now offers household items and essentials you need everyday plus the best of Amazon, delivered to your doorstep. Choose 2-hour delivery or 1-hour delivery in select cities.", "Explore Prime Now", "https://www.amazon.com", "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A04._CB494909365_.jpg");`;
    expect(json2query('Users', user)).toBe(userQuery);
    expect(json2query('CardSlides', cardSlide)).toBe(cardslideQuery);
  });
});
