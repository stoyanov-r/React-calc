import React, {  PureComponent } from 'react';
import Input from '../../components/Input/Input';
import Keyboard from '../../components/Keyboard/Keyboard';
import classes from './Calc.module.scss';
import { connect } from 'react-redux';
import { changeInput, onKeyHandler } from '../../store/actions/Calc';

export class Calc extends PureComponent {



  onEscClick = event => {
    this.props.onEscClick(event)
}

  componentDidMount(){
    document.addEventListener("keydown", this.onEscClick, false)
} 

  componentWillUnmount(){
      document.removeEventListener("keydown", this.onEscClick, false)
  }

  render() {
    return (
      <div className={classes.Calc}>
        <h1>Calc</h1>
        <div className={classes.Input}>
          <Input />
        </div>
        <div>
          <Keyboard />
        </div>
      </div>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    onEscClick: evt => dispatch(onKeyHandler(evt)),
  }
}

export default connect(null, mapDispatchToProps)(Calc);
