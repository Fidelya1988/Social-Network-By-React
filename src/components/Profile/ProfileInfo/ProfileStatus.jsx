
 import React from 'react';
import styles from './ProfileInfo.module.css';



class ProfileStatus extends React.Component {


  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditeMode = () => {




    this.setState({ editMode: true })


  }
  deActivateEditeMode = () => {



    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)

  }

  onChangeStatus = (event) => {

    this.setState(
      { status: event.currentTarget.value }
    )
   
  }

componentDidUpdate (prevProps, prevState){
  if(prevProps.status!==this.props.status) {
    this.setState({status: this.props.status})
  }
  console.log('componentDidUpdate')
}

  render() {

    const { status } = this.props;
    
    return (
      <div className={styles.aboutMe}>
        {
          !this.state.editMode ?
            <span className={styles.statusText} onDoubleClick={this.activateEditeMode}>{status ? status : 'Double click to wright somwere'}</span>
            : <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deActivateEditeMode} defaultValue={this.state.status} />
        }
      </div>
    )

  }


}




export default ProfileStatus;