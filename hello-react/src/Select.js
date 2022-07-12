import { Component, createRef } from 'react';
import classNames from 'classnames';
import styles from './Select.module.scss';

class Select extends Component {
  state = {
    menuOpen: false,
  };

  hostRef = createRef(); // hook : useRef

  handleWindowClick = (event) => {
    if (!this.hostRef.current.contains(event.target)) {
      console.log('window click');
      this.setState({
        menuOpen: false,
      });
    }
  }
  handleClick = () => {
    console.log('handleClick');
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };
  handleClickItem = (option) => {
    const { onSelected = () => {} } = this.props;
    console.log('handleClickItem');
    onSelected(option.value)
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }


  render() {
    const { options, selected = options[0].value } = this.props;
    const { menuOpen } = this.state;

    // const menuItems = [];
    // for (const option of options) {
    //   menuItems.push(<div key={option.value} className="menuItem">{option.label}</div>);
    // }

    // const menuItems = options.map((option) => <div key={option.value} className="menuItem">{option.label}</div>);

    return (
      <div className={styles.container} onClick={this.handleClick} ref={this.hostRef}>
        <div className={styles.selected}>{selected}</div>
        {/* <div className={classNames('menu', {hidden: true})}> */}
        {menuOpen && (
          <div className={styles.menu}>
            {options.map((option) => (
              <div
                key={option.value}
                className={styles.item}
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
