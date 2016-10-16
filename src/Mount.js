/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/10/13
 */

/**
 * React Components Lifecycle
 * Mounting阶段
 */
var CommentBox = React.createClass({

    getInitialState: function () {
        console.log('state：1');
        return {
            'fontSize': '100px'
        }
    },
    render: function() {
        return (
            <div style={this.state} className="commentBox">
                Hello, world!
            </div>
        );
    },

    componentWillMount: function () {
        console.log('will Mount: 2');
    },

    componentDidMount: function () {
        console.log('did Mount: 3');

        window.setTimeout(function () {
            this.setState({
                'fontSize': '200px'
            });

        }.bind(this), 2000);
    }
});

/**
 * 渲染到页面
 */
ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
