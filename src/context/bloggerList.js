import React, { Component } from 'react';

const BloggerListContext = React.createContext({
    bloggerList: [],
    error: null,
    setError: () =>{},
clearError: () =>{},
setBloggerList: () =>{},
});

export default BloggerListContext;

export class BloggerListProvider extends Component {
    state = {
        bloggerList: [],
        bloggerTypes: [],
        bloggerAdd: false,
        error: null,
    };
    
    setBloggerList =(bloggerList) => {
        this.setState({ bloggerList});
    }

    removeElement(arr, elem) {
        let idx = arr.indexOf(elem);
        if (idx > -1) {
            arr.splice(idx, 1);
        }
    }

    removeBloggerType =(bloggerId) =>{
        this.removeElement(this.setBloggerList.bloggerTypes, bloggerId);
    };

    

}