from django.http import JsonResponse
from django.conf import settings
from .models import Tag, TextContent
from django.shortcuts import render

import openai

openai.api_key = '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'

def index(request):
    return render(request, 'myapp/index.html')

def chat(request):
    message = request.GET.get('message', None)
    if message:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": message},
            ]
        )
        return JsonResponse(response['choices'][0]['message']['content'], safe=False)
    else:
        response = {"error": "No message provided"}
        return JsonResponse(response)

def get_tags(request):
    tags = Tag.objects.all()
    return JsonResponse([tag.to_dict() for tag in tags], safe=False)

def create_tag(request):
    new_tag = Tag.objects.create(name=request.POST['name'])
    return JsonResponse(new_tag.to_dict(), safe=False)

def edit_tag(request):
    tag = Tag.objects.get(id=request.POST['id'])
    tag.name = request.POST['name']
    tag.save()
    return JsonResponse(tag.to_dict(), safe=False)

def delete_tag(request):
    tag = Tag.objects.get(id=request.POST['id'])
    tag.delete()
    return JsonResponse({'status': 'success'}, safe=False)

def get_text_content(request):
    text_content = TextContent.objects.first()
    return JsonResponse(text_content.to_dict(), safe=False)

def update_text_content(request):
    text_content = TextContent.objects.first()
    text_content.content = request.POST['content']
    text_content.save()
    return JsonResponse(text_content.to_dict(), safe=False)
