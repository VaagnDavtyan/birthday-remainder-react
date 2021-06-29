import { Component } from 'react';
import './Data'


class List extends Component {
  constructor(){
super();
this.state = {
items: [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
 },
 {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
 },
 {
    id: 3,
    name: "Larry Little",
    age: 36,
    image:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
 },
 {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
 },
 {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
 }
]
};
  }

handleClick = () => {
  this.setState({ items: ""});
};

render() {
  const { items } = this.state;
  const person = items ? items.map((item) => {
return (
  <div className='person'>
<img src={item.image} alt='person1' />
<div className='name-age'>
<h4>{item.name}</h4>
<p>{item.age} years</p>
</div>
  </div>
)
  })
: "";

return (
<div className='list'>
<h3>{items.length} birthdays today</h3>
{person}
<button onClick={this.handleClick}>Clear All</button>
</div> 
);
}
}

export default List;