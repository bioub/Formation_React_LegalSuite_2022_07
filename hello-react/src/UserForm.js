// import { Component } from 'react';

import { useState } from "react";

// class UserForm extends Component {
//   state = {
//     firstname: 'Romain',
//     email: 'romain.bohdanowicz@formation.tech',
//     gender: 'male',
//     active: true,
//   };

//   handleChange = (event) => {
//     const value = event.target.type !== 'checked' ? event.target.value : event.target.checked;
//     this.setState({
//       [event.target.name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault(); // désactive le comportement par défaut du form
//     console.log(this.state);
//   }

//   render() {
//     const { firstname, email, gender, active } = this.state;
//     return (
//       <form className="UserForm" onSubmit={this.handleSubmit}>
//         <div>
//           Firstname : <input name="firstname" value={firstname} onChange={this.handleChange} />
//         </div>
//         <div>
//           Email : <input name="email" value={email} onChange={this.handleChange} />
//         </div>
//         <div>
//           Gender :{' '}
//           {/* value utilisable sur textarea */}
//           <select name="gender" value={gender} onChange={this.handleChange}>
//             <option value="female">Female</option>
//             <option value="male">Male</option>
//           </select>
//         </div>
//         <div>
//           Active :{' '}
//           <input
//             name="active"
//             type="checkbox"
//             checked={active}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <button>Create</button>
//         </div>
//       </form>
//     );
//   }
// }

function UserForm() {
  const [user, setUser] = useState({
    firstname: 'Romain',
    email: 'romain.bohdanowicz@formation.tech',
    gender: 'male',
    active: true,
  })

  const handleChange = (event) => {
    const value = event.target.type !== 'checked' ? event.target.value : event.target.checked;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // désactive le comportement par défaut du form
    console.log(user);
  }

    return (
      <form className="UserForm" onSubmit={handleSubmit}>
        <div>
          Firstname : <input name="firstname" value={user.firstname} onChange={handleChange} />
        </div>
        <div>
          Email : <input name="email" value={user.email} onChange={handleChange} />
        </div>
        <div>
          Gender :{' '}
          {/* value utilisable sur textarea */}
          <select name="gender" value={user.gender} onChange={handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div>
          Active :{' '}
          <input
            name="active"
            type="checkbox"
            checked={user.active}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    );
}


export default UserForm;
