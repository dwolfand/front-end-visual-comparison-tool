import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Link } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
  card: {
    minWidth: 275,
  }
});

class TestForm extends Component {
  renderTextField = ({
    input,
    label,
    placeholder,
    required,
    defaultValue,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      label={touched && error ? error : label}
      error={touched && error ? true : false}
      required={required}
      placeholder={placeholder}
      {...input}
      {...custom}
    />
  )

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <form onSubmit={this.props.onSubmit}>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    {this.props.title}
                  </Typography>
                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="name"
                      label="Name"
                      margin="normal"
                      placeholder="The name of your test"
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="description"
                      label="Description"
                      margin="normal"
                      placeholder="Describe your test."
                      className={classes.textField}
                      component={this.renderTextField}  />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="live"
                      label="Live URL"
                      margin="normal"
                      placeholder="The url path for your live site."
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="dev"
                      label="Dev URL"
                      margin="normal"
                      placeholder="The url path for your dev site."
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="number" 
                      name="size"
                      label="Browser Size"
                      margin="normal"
                      placeholder="The browser width you'd like your test to run at."
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>
                </CardContent>
                <CardActions>
                  <Button type="submit">Submit</Button>
                  <Link to="/" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }}><Button type="submit">Cancel</Button></Link>
                </CardActions>
              </form>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name for your test...'
  };

  if (!values.live) {
    errors.live = 'Live URL is required...'
  };

  if (!values.dev) {
    errors.dev = 'Dev URL is required...'
  };

  return errors;
}

TestForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(TestForm);