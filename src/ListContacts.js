import React from 'react'
import PropTypes from 'prop-types'

//refactor into a functional component
function ListContacts(props){
  return (
    <ol className='contact-list'>
      {props.contacts.map((c) => (
        <li key={c.id} className='contact-list-item'>
          <div className='contact-avatar' style={{backgroundImage:`url(${c.avatarURL})`}}>
          </div>
          <div className='contact-details'>
            <p>{c.name}</p>
            <p>{c.email}</p>
          </div>
          <button onClick={() => props.onDeleteContact(c)} className='contact-remove'>
            Remove
          </button>
        </li>
      ))}
    </ol>
  )
}

// class ListContacts extends Component {
//   render(){
//     // console.log(this.props);
//     return (
//       <ol className='contact-list'>
//         {this.props.contacts.map(c => (
//           <li key={c.id} className='contact-list-item'>
//             <div className='contact-avatar' style={{backgroundImage:`url(${c.avatarURL})`}}>
//             </div>
//             <div className='contact-details'>
//               <p>{c.name}</p>
//               <p>{c.email}</p>
//             </div>
//             <button className='contact-remove'>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ol>
//     )
//   }
// }

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}
export default ListContacts
