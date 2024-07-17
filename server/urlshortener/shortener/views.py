from django.http import JsonResponse, HttpResponseRedirect, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from .models import URL
import string
import random

def generate_short_code(length=8):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

@csrf_exempt
def shorten_url(request):
    if request.method == 'POST':
        original_url = request.POST.get('url')
        if not original_url:
            return HttpResponseBadRequest('Invalid URL')

        try:
            url_object = URL.objects.get(original_url=original_url)
            short_code = url_object.short_code
        except URL.DoesNotExist:
            short_code = generate_short_code()
            URL.objects.create(original_url=original_url, short_code=short_code)

        return JsonResponse({'short_code': short_code})

    return HttpResponseBadRequest('Invalid request')

def redirect_url(request, short_code):
    try:
        url = URL.objects.get(short_code=short_code)
        return HttpResponseRedirect(url.original_url)
    except URL.DoesNotExist:
        return JsonResponse({'error': 'URL not found'}, status=404)

def get_all_urls(request):
    urls = URL.objects.all().order_by('-created_at')
    data = [{'short_code': url.short_code, 'original_url': url.original_url, 'created_at': url.created_at} for url in urls]
    return JsonResponse(data, safe=False)

def get_url_details(request, short_code):
    try:
        url = URL.objects.get(short_code=short_code)
        data = {'short_code': url.short_code, 'original_url': url.original_url, 'created_at': url.created_at}
        return JsonResponse(data)
    except URL.DoesNotExist:
        return JsonResponse({'error': 'URL not found'}, status=404)
