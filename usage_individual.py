import sd_material_ui
import dash
import flask
import dash_html_components as html
import time

app = dash.Dash('')

app.scripts.config.serve_locally = True

# Callback for BottomNavigation
app.layout = html.Div([
    sd_material_ui.AppBar(id='test'),
])


# @app.callback(
#     dash.dependencies.Output('question-output-id', 'children'),
#     [
#         dash.dependencies.Input('questions-id', 'value'),
#         dash.dependencies.Input('questions-id', 'n_clicks'),
#      ],
#     [dash.dependencies.State('questions-id', 'n_clicks_previous')])
# def update_questions_output(value, n_clicks, n_clicks_previous):
#     time.sleep(5)
#     return '{} {} {}'.format(value, n_clicks, n_clicks_previous)


if __name__ == '__main__':
    app.css.append_css({'external_url': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'})
    app.run_server(debug=True)
