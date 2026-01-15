import google.generativeai as genai
genai.configure(api_key="GEMINI_API_KEY")

# List available models (if supported)
models = genai.models.list()  # or genai.list_models()
print(models)
