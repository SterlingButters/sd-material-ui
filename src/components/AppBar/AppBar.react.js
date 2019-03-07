// @flow

import React from 'react';

import MUIAppBar from 'material-ui/AppBar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** id for the component */
  id?: string,
  /**
   *
   *
   */
  titleStyle?: Object,
  /**
   *
   */
  title?: string,
  /**
   *
   */
  titleStyle?: Object,
  /**
   *
   */
  n_clicks_title?: Number,
  /**
   *
   */
  iconStyleLeft?: Object,
  /**
   *
   */
  iconStyleRight?: Object,
  /**
   *
   */
  showMenuIconButton?: Boolean,
  /**
   *
   */
  iconElementLeft?: Node,
  /**
   *
   */
  n_clicks_left?: Number,
  /**
   *
   */
  n_clicks_right?: Number,
  /**
   *
   */
  iconElementRight?: Node,
  /**
   *
   */
  iconClassNameLeft?: string,
  /**
   *
   */
  iconClassNameRight?: string,
  /**
   *
   */
  className?: string,
  /**
   *
   */
  style?: Object,
  /**
   *
   */
  zDepth?: Number,
  /**
   *
   */
  children?: Node,
    /** Dash callback to update props on the server */
  setProps?: () => void,
};

const defaultProps = {
  children: null,
  className: '',
  iconClassNameLeft: '',
  iconClassNameRight: '',
  iconElementLeft: null,
  iconElementRight: null,
  iconStyleLeft: {},
  iconStyleRight: {},
  n_clicks_left: 0,
  n_clicks_right: 0,
  n_clicks_title: 0,
  setProps: () => {},
  showMenuIconButton: true,
  style: {},
  title: '',
  titleStyle: {},
  zDepth: 0,
};

export default class AppBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleLeftIconButtonClick = this.handleLeftIconButtonClick.bind(this);
    this.handleRightIconButtonClick = this.handleRightIconButtonClick.bind(this);
  }

  handleTitleClick() {
    if (this.props.setProps) this.props.setProps({n_clicks_title: this.props.n_clicks_title + 1});
    // if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  }

  handleLeftIconButtonClick() {
    if (this.props.setProps) this.props.setProps({n_clicks_left: this.props.n_clicks_left + 1});
  }

  handleRightIconButtonClick() {
    if (this.props.setProps) this.props.setProps({n_clicks_right: this.props.n_clicks_right + 1});
  }

  render() {
    return (
      <div id={this.props.id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUIAppBar
            title={this.props.title}
            titleStyle={this.props.titleStyle}
            n_clicks_title={this.props.n_clicks_title}
            iconStyleLeft={this.props.iconStyleLeft}
            iconStyleRight={this.props.iconStyleRight}
            onTitleClick={this.handleTitleClick}
            showMenuIconButton={this.props.showMenuIconButton}
            iconElementLeft={this.props.iconElementLeft}
            iconElementRight={this.props.iconElementRight}
            n_clicks_left={this.props.n_clicks_left}
            n_clicks_right={this.props.n_clicks_right}
            iconClassNameLeft={this.props.iconClassNameLeft}
            iconClassNameRight={this.props.iconClassNameRight}
            onLeftIconButtonClick={this.handleLeftIconButtonClick}
            onRightIconButtonClick={this.handleRightIconButtonClick}
            className={this.props.className}
            style={this.props.style}
            zDepth={this.props.zDepth}
          >
            {this.props.children}
          </MUIAppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

AppBar.defaultProps = defaultProps;
