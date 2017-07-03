import React, {Component} from 'react'
import PropTypes from 'prop-types'

//refactor into a functional component - if neccesary
// function ListContacts(props){
//   return (
//     <ol className='contact-list'>
//       {props.contacts.map((c) => (
//         <li key={c.id} className='contact-list-item'>
//           <div className='contact-avatar' style={{backgroundImage:`url(${c.avatarURL})`}}>
//           </div>
//           <div className='contact-details'>
//             <p>{c.name}</p>
//             <p>{c.email}</p>
//           </div>
//           <button onClick={() => props.onDeleteContact(c)} className='contact-remove'>
//             Remove
//           </button>
//         </li>
//       ))}
//     </ol>
//   )
// }

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }
  render(){
    // console.log(this.props);
    return (
      <div className="list-contacts">
        <div>
          <input
          className="search-contacts"
          type='text'
          placeholder='Search Contacts'
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)} />
        </div>
        <ol className='contact-list'>
          {this.props.contacts.map(c => (
            <li key={c.id} className='contact-list-item'>
              <div className='contact-avatar' style={{backgroundImage:`url(${c.avatarURL})`}}>
              </div>
              <div className='contact-details'>
                <p>{c.name}</p>
                <p>{c.email}</p>
              </div>
              <button className='contact-remove'>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}


export default ListContacts
