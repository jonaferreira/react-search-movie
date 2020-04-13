import React, { Component } from 'react'

import { Button, TextField, ThemeProvider, createMuiTheme } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        //e.prenvetDefault()
        alert(this.state.inputMovie)
    }
    
    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className='searchForm-wrapper'>
                    <ThemeProvider theme={theme}>
                        <TextField
                            className="classes.margin"
                            label="Movie to search..."
                            variant="outlined"
                            id="mui-theme-provider-outlined-input"
                            placeholder="Movie to search..."
                            onChange={this._handleChange}
                        />
                    </ThemeProvider>

                    <Button variant="contained" color="primary" type="submit">
                        Search
                    </Button>
                </div>
            </form>
        )
    }
}