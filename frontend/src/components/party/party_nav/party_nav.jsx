import React from 'react';


class PartyNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.closeDetails();
  }

  render() {

    return (
      <div className="party-nav">
          <p>Party Huzzah</p>
      </div>
    );
  }
}

export default PartyNav;