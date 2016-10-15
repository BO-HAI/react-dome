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
        alert('initialState');
        return {
            opacity: 1,
            fontSize: '52px'
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
        alert('will Mount');
    },
    componentDidMount: function () {
        alert('did Mount');

        //var _self = this;

        window.setTimeout(function () {
            this.setState({
                opacity: 0.5,
                fontSize: '100px'
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
