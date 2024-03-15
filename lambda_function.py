import json
import os
import boto3

client = boto3.client('bedrock-runtime')
def lambda_handler(event, context):
    # print("EVENT",str(event))
    
    
    try:
        response = client.invoke_model(
            body=json.dumps({
                "prompt": "Human:"+event['prompt']+"\n\nAssistant:","temperature":0.9,"max_tokens_to_sample":4096
            }),

            contentType='application/json',
            accept='application/json',
            modelId='anthropic.claude-v2'
        )
        response_byte = response['body'].read()
        response_string = json.loads(response_byte)
        # print(response_string['completion'])
        
        return {
            'statusCode': 200,
            'body': response_string['completion'],
            'test' : event
        }
    except Exception as e:
        print("Error:", e)
        return {
            'statusCode': 500,
            'body': str(e)
        }