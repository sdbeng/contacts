import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

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
  clearQuery = () => {
    this.setState({query: ''})
  }
  render(){
    // console.log(this.props);

    //only show the contacts matched by the regexp or whatever the list were originally
    let showingContacts
    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = this.props.contacts.filter((contact) => match.test((contact.name)))
    }else {
      showingContacts = this.props.contacts
    }
    // we also want to make sure our contacts are sorted alfa by name
    showingContacts.sort(sortBy('name'))
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
{/* add total contacts span div: if contacts shown are not the same as total contacts, then show up the following span div */}
        {showingContacts.length !== this.props.contacts.length && (
          <div className="showing-contacts">
            <span>Now showing {showingContacts.length} of {this. props.contacts.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className='contact-list'>
          {/* instead of mapping over this.props.contacts, map over showingContacts */}
          {showingContacts.map(c => (
            <li key={c.id} className='contact-list-item'>
              <div className='contact-avatar' style={{backgroundImage:`url(${c.avatarURL})`}}>
              </div>
              <div className='contact-details'>
                <p>{c.name}</p>
                <p>{c.email}</p>
              </div>
              <button onClick={() => this.props.onDeleteContact(c)} className='contact-remove'>
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
