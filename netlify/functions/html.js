def lambda_handler(event, context):
    # Read the HTML file
    with open('index.html', 'r') as file:
        html_content = file.read()

    # Create a response
    response = {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/html',
        },
        'body': html_content
    }

    return response