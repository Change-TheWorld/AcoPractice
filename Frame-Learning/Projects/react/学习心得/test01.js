        var MyCompoent = React.createClass({
            getInitialState: function() {
                return {clickNum: 0};
            },
            handleClick: function() {
                var num = this.state.clickNum;
                num++;
                this.setState({clickNum: num});
            },
            render: function() {
                return (
                    <div>
                        <h1 onClick={this.handleClick}>Hello {this.props.name}!</h1>
                        <h3 style={{color: 'red'}}>点击{this.props.name}次数： {this.state.clickNum}</h3>
                    </div>
                );
            }
        });
            
        ReactDOM.render(
            <div>
                <MyCompoent name="张三" />
                <hr/>
                <MyCompoent name="李四" />
            </div>,
        document.getElementById('example')
);