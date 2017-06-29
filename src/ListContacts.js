import React, {Component} from 'react'

class ListContacts extends Component {
  render(){
    // console.log(this.props);
    return (
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
    )
  }
}
export default ListContacts
