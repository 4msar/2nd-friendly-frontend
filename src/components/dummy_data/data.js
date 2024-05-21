import dryClean1 from "@/assets/img/dry-cleaning/1.jpg";
import dryClean2 from "@/assets/img/dry-cleaning/2.jpg";
import dryClean3 from "@/assets/img/dry-cleaning/3.jpg";
import phoneRepair1 from "@/assets/img/phone-repair/1.jpg";
import phoneRepair2 from "@/assets/img/phone-repair/2.jpg";
import phoneRepair3 from "@/assets/img/phone-repair/3.jpg";
import autoService1 from "@/assets/img/auto-service/7.jpg";
import autoService2 from "@/assets/img/auto-service/2.jpg";
import autoService3 from "@/assets/img/auto-service/3.jpg";
import gun1 from "@/assets/img/gun-store/1.jpg";
import gun2 from "@/assets/img/gun-store/3.jpg";
import gun3 from "@/assets/img/gun-store/5.jpg";
import home1 from "@/assets/img/home-service/1.jpg";
import home2 from "@/assets/img/home-service/2.jpg";
import home3 from "@/assets/img/home-service/3.jpg";
import event1 from "@/assets/img/event/1.jpg";
import event2 from "@/assets/img/event/2.jpg";
import event3 from "@/assets/img/event/3.jpg";
import event4 from "@/assets/img/event/4.jpg";
import event5 from "@/assets/img/event/5.jpg";

export const categories = [
    {title: "Food & Dining", subtitle: '4 Sub Categories', icon: "fas fa-utensils", link:"#", class:"bg-purple text-purple"},
    {title: "Home & Garden", subtitle: '11 Sub Categories', icon: "fas fa-home", link:"#", class:"bg-danger text-danger"},
    {title: "Health & Medicine", subtitle: '20 Sub Categories', icon: "fas fa-notes-medical", link:"#", class:"bg-blue text-blue"},
    {title: "Automotive", subtitle: '9 Sub Categories', icon: "fas fa-car", link:"#", class:"bg-success text-success"},
    {title: "Personal Care & Services", subtitle: '9 Sub Categories', icon: "bi bi-person", link:"#", class:"bg-orange text-orange"},
    {title: "Computers & Electronics", subtitle: '2 Sub Categories', icon: "fas fa-laptop", link:"#", class:"bg-primary text-primary"},
    {title: "Construction & Contractors", subtitle: '12 Sub Categories', icon: "bi bi-person", link:"#", class:"bg-info text-info"},
    {title: "Entertainment", subtitle: '5 Sub Categories', icon: "bi bi-headphones", link:"#", class:"bg-warning text-warning"},
    {title: "Legal & Financial", subtitle: '6 Sub Categories', icon: "bi bi-hammer", link:"#", class:"bg-orange text-orange"},
    {title: "Real Estate", subtitle: '1 Sub Categories', icon: "bi bi-house", link: "#", class:"bg-primary text-primary"},
    {title: "Manufacturing, Wholesale", subtitle: '3 Sub Categories', icon: "bi bi-shop", link: "#", class:"bg-info text-info"},
    {title: "Merchants (Retail)", subtitle: '5 Sub Categories', icon: "fas fa-store", link: "#", class:"bg-warning text-warning"},
    {title: "Miscellaneous", subtitle: '3 Sub Categories', icon: "fas fa-info-circle", link: "#", class:"bg-warning text-warning"},
    {title: "Education", subtitle: '3 Sub Categories', icon: "fas fa-user-graduate fa-fw",  link: "#", class:"bg-warning text-warning"},
    {title: "Business Support & Supplies", subtitle: '5 Sub Categories', icon: "fas fa-headset", link: "#", class:"bg-warning text-warning"},
]

export const advertisements = [
    {title:"Elegant Garment Care Solutions", images:[{img:dryClean1, class: 'active'}, {img:dryClean2, class:''}, {img:dryClean3, class: ''}], starCount:"1.5k", status:"Closed", time:"8:00", description: "The Loop Oddly enough, this feels like a place that although specializes in pizza excels in everything else they make. That isn't a knock to the pizza...", address:"4935 W Foster Ave Sauganash, CA"},

    {title:"Elegant Garment Care Solutions", images:[{img:phoneRepair1, class: 'active'}, {img:phoneRepair2, class:''}, {img:phoneRepair3, class: ''}], starCount:"1.5k", status:"Closed", time:"8:00", description: "The Loop Oddly enough, this feels like a place that although specializes in pizza excels in everything else they make. That isn't a knock to the pizza...", address:"4935 W Foster Ave Sauganash, CA"},

    {title:"Elegant Garment Care Solutions", images:[{img:phoneRepair1, class: ''}, {img:phoneRepair2, class:'active'}, {img:phoneRepair3, class: ''}], starCount:"1.5k", status:"Closed", time:"8:00", description: "The Loop Oddly enough, this feels like a place that although specializes in pizza excels in everything else they make. That isn't a knock to the pizza...", address:"4935 W Foster Ave Sauganash, CA"},

    {title:"Elegant Garment Care Solutions", images:[{img:dryClean1, class: ''}, {img:dryClean2, class:'active'}, {img:dryClean3, class: ''}], starCount:"1.5k", status:"Closed", time:"8:00", description: "The Loop Oddly enough, this feels like a place that although specializes in pizza excels in everything else they make. That isn't a knock to the pizza...", address:"4935 W Foster Ave Sauganash, CA"},
    {title:"Elegant Garment Care Solutions", images:[{img:phoneRepair1, class: ''}, {img:phoneRepair2, class:'active'}, {img:phoneRepair3, class: ''}], starCount:"1.5k", status:"Closed", time:"8:00", description: "The Loop Oddly enough, this feels like a place that although specializes in pizza excels in everything else they make. That isn't a knock to the pizza...", address:"4935 W Foster Ave Sauganash, CA"},

    {title:"Elegant Garment Care Solutions", images:[{img:dryClean1, class: ''}, {img:dryClean2, class:'active'}, {img:dryClean3, class: ''}], starCount:"1.5k", status:"Closed", time:"8:00", description: "The Loop Oddly enough, this feels like a place that although specializes in pizza excels in everything else they make. That isn't a knock to the pizza...", address:"4935 W Foster Ave Sauganash, CA"},
]

export const blogPosts = [
    {title:"Student Loan Survey: Many Owe $50K-plus", images:[{img:autoService1, class: 'active'}, {img:autoService2, class:''}, {img:autoService3, class: ''}], time:"Saturday, June 11, 2024", description: "Affronting imprudence do he he everything. Offered chiefly farther of my no colonel...", author: "Arielle Norheim" },

    {title:"Student Loan Survey: Many Owe $50K-plus", images:[{img:gun1, class: 'active'}, {img:gun2, class:''}, {img:gun3, class: ''}], time:"Saturday, June 11, 2024", description: "Affronting imprudence do he he everything. Offered chiefly farther of my no colonel...", author: "Arielle Norheim" },

    {title:"Never underestimate the influence of Eduport", images:[{img:phoneRepair1, class: 'active'}, {img:phoneRepair2, class:''}, {img:phoneRepair3, class: ''}], time:"5D Ago", description: "Affronting imprudence do he he everything. Offered chiefly farther of my no colonel...", author: "Joan Wallace" },

    {title:"Covid-19 and the college experienced", images:[{img:home1, class: 'active'}, {img:home2, class:''}, {img:home3, class: ''}], time:"Saturday, July 11, 2024", description: "Affronting imprudence do he he everything. Offered chiefly farther of my no colonel...", author: "Amanda" },

]

export const events = [
    {title: "Global Education Fall Meeting for Everyone", subtitle:"Satisfied conveying a dependent contented he gentleman agreeable do be.", date:"29 September 2021", img:event1, class:""},
    {title: "Global Education Fall Meeting for Everyone", subtitle:"Satisfied conveying a dependent contented he gentleman agreeable do be.", date:"29 September 2021", img:event2,class:""},
    {title: "Global Education Fall Meeting for Everyone", subtitle:"Satisfied conveying a dependent contented he gentleman agreeable do be.", date:"29 September 2021", img:event3,class:""},
    {title: "Global Education Fall Meeting for Everyone", subtitle:"Satisfied conveying a dependent contented he gentleman agreeable do be.", date:"Live", img:event4,class:""},
    {title: "Global Education Fall Meeting for Everyone", subtitle:"Satisfied conveying a dependent contented he gentleman agreeable do be.", date:"29 September 2021", img:event5,class:""},
    {title: "Global Education Fall Meeting for Everyone", subtitle:"Satisfied conveying a dependent contented he gentleman agreeable do be.", date:"Tomorrow", img:event1,class:""},
]