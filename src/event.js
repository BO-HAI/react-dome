/**
 * @file:
 * @author: BO HAI (1169282772@qq.com).
 * @date:   2016/10/16
 */

var TestClickComponent = React.createClass({
    handleClick: function (event) {
        var tepE = ReactDOM.findDOMNode(this.refs.tip);

        if (tepE.style.display === 'none') {
            tepE.style.display = 'inline';
        } else {
            tepE.style.display = 'none';
        }

        event.stopPropagation();
        event.preventDefault();
    },

    render: function() {
        return (
            <div>
                <button onClick={this.handleClick}>显示|隐藏</button>
                <span ref="tip">隐藏我</span>
            </div>
        );
    }
});

var TestInputComponent = React.createClass({
    changeHandler: function (event) {
        this.setState({
            inputContent: event.target.value
        });
        event.stopPropagation();
        event.preventDefault();
    },
    getInitialState: function () {
        return {
            inputContent: ''
        }
    },
    render: function () {
        return (
            <div>
                <input type="text" onChange={this.changeHandler}/>
                <span>{this.state.inputContent}</span>
            </div>
        )
    }
});

ReactDOM.render(
    <div>
        <TestClickComponent/> <TestInputComponent/>
    </div>,
    document.getElementById('content')
);