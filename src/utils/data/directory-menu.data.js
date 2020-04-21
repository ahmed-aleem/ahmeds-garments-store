import Jacket from "../../static/images/menu-item1.jpeg";
import Hat from "../../static/images/menu-item2.jpeg";
import Sneaker from "../../static/images/menu-item3.jpeg";
import Men from "../../static/images/menu-item4.jpeg";
import Women from "../../static/images/menu-item5.jpeg";

const sections = [
    {
        title: "hats",
        img: Hat,
        linkUrl: "hats"
    },
    {
        title: "jackets",
        img: Jacket,
        linkUrl: "jackets"
    },
    {
        title: "sneakers",
        img: Sneaker,
        linkUrl: "sneakers"
    },
    {
        title: "Mens",
        img: Men,
        size: "large",
        linkUrl: "mens"
    },
    {
        title: "Womens",
        img: Women,
        size: "large",
        linkUrl: "womens"
    }
]

export default sections;