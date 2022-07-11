import { Component } from 'react';
import classNames from 'classnames';

class Select extends Component {
  state = {
    selected: this.props.options[0],
    menuOpen: false,
  };
  handleClick = () => {
    console.log('handleClick');
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };
  handleClickItem = (option) => {
    console.log('handleClickItem');
    this.setState({
      selected: option,
    });
  };
  render() {
    const { options } = this.props;
    const { selected, menuOpen } = this.state;

    // const menuItems = [];
    // for (const option of options) {
    //   menuItems.push(<div className="menuItem">{option.label}</div>);
    // }

    // const menuItems = options.map((option) => <div className="menuItem">{option.label}</div>);

    return (
      <div className="Select" onClick={this.handleClick}>
        <div className="selected">{selected.label}</div>
        {/* <div className={classNames('menu', {hidden: true})}> */}
        {menuOpen && (
          <div className="menu">
            {options.map((option) => (
              <div
                key={option.value}
                className="menuItem"
                onClick={() => this.handleClickItem(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
