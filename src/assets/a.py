# import requests
# import base64

# client_id = ""
# client_secret = ""

# credentials = "%s:%s" % ('AZu0GaNcqlozXQR00F2m-pR9Rjqd63fxQm1hi8rnLl-tsxius0tqtpoR2GECn7RXRtg4k5Rbnvi2lmIv', 'AZu0GaNcqlozXQR00F2m-pR9Rjqd63fxQm1hi8rnLl-tsxius0tqtpoR2GECn7RXRtg4k5Rbnvi2lmIv')
# encode_credential = base64.b64encode(credentials.encode('utf-8')).decode('utf-8').replace("\n", "")

# headers = {
#     "Authorization": ("Basic %s" % encode_credential),
#     'Accept': 'application/json',
#     'Accept-Language': 'en_US',
# }

# param = {
#     'grant_type': 'client_credentials',
# }

# url = 'https://api-m.paypal.com/v1/oauth2/token'

# r = requests.post(url, headers=headers, data=param)

# print(r.text)

import requests
import base64
# import json

def PaypalToken(client_ID, client_Secret):

    url = "https://api-m.paypal.com/v1/oauth2/token"
    data = {
                # "client_id":client_ID,
                # "client_secret":client_Secret,
                "grant_type":"client_credentials"
            }
    headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                # "Authorization": "Basic {0}".format(base64.b64encode((client_ID + ":" + client_Secret).encode()).decode()),
                '{0}'.format(base64.b64encode((client_ID).encode()):'{0}'.format(base64.b64encode((client_Secret).encode())
            }

    token = requests.post(url, data, headers=headers)
    return token

token = PaypalToken('AZu0GaNcqlozXQR00F2m-pR9Rjqd63fxQm1hi8rnLl-tsxius0tqtpoR2GECn7RXRtg4k5Rbnvi2lmIv','AZu0GaNcqlozXQR00F2m-pR9Rjqd63fxQm1hi8rnLl-tsxius0tqtpoR2GECn7RXRtg4k5Rbnvi2lmIv')
print(token)
# headers = {"Content-Type": "application/json",
#            "Authorization": 'Bearer ' + 'A21AAKuqh8coypEH76AMlmQgej-5IZ1OLQntDUcWKdPzQRqpiTn7Of1lYKA4BlVVhzO_jj9hJ3LilhxApy6AraATTKfuTo9Tw'}
           
# url = 'https://api.sandbox.paypal.com/v2/checkout/orders'

# # data ='{"intent": "CAPTURE" "purchase_units": [{"amount": {"currency_code": "USD","value": "100.00"} }]}'
# # data = {"intent": "CAPTURE","purchase_units": [{"amount": {"currency_code": "USD","value": "100.00"} }], "application_context": {"return_url": "https://www.example.com",    "cancel_url": "https://www.example.com",    "brand_name": "EXAMPLE INC",    "landing_page": "BILLING", "user_action": "CONTINUE"},}
# data = data = {
#                 "intent": "CAPTURE",
#                 "application_context": {
#                     "return_url": "https://www.example.com",
#                     "cancel_url": "https://www.example.com",
#                     "brand_name": "EXAMPLE INC",
#                     "landing_page": "BILLING",
#                     "shipping_preference": "SET_PROVIDED_ADDRESS",
#                     "user_action": "CONTINUE"
#                 },
#                 "purchase_units": [
#                     {
#                         "reference_id": "PUHF",
#                         "description": "Sporting Goods",

#                         "custom_id": "CUST-HighFashions",
#                         "soft_descriptor": "HighFashions",
#                         "amount": {
#                             "currency_code": "USD",
#                             "value": "220.00",
#                             "breakdown": {
#                                 "item_total": {
#                                     "currency_code": "USD",
#                                     "value": "180.00"
#                                 },
#                                 "shipping": {
#                                     "currency_code": "USD",
#                                     "value": "20.00"
#                                 },
#                                 "handling": {
#                                     "currency_code": "USD",
#                                     "value": "10.00"
#                                 },
#                                 "tax_total": {
#                                     "currency_code": "USD",
#                                     "value": "20.00"
#                                 },
#                                 "shipping_discount": {
#                                     "currency_code": "USD",
#                                     "value": "10"
#                                 }
#                             }
#                         },
#                         "items": [
#                             {
#                                 "name": "T-Shirt",
#                                 "description": "Green XL",
#                                 "sku": "sku01",
#                                 "unit_amount": {
#                                     "currency_code": "USD",
#                                     "value": "90.00"
#                                 },
#                                 "tax": {
#                                     "currency_code": "USD",
#                                     "value": "10.00"
#                                 },
#                                 "quantity": "1",
#                                 "category": "PHYSICAL_GOODS"
#                             },
#                             {
#                                 "name": "Shoes",
#                                 "description": "Running, Size 10.5",
#                                 "sku": "sku02",
#                                 "unit_amount": {
#                                     "currency_code": "USD",
#                                     "value": "45.00"
#                                 },
#                                 "tax": {
#                                     "currency_code": "USD",
#                                     "value": "5.00"
#                                 },
#                                 "quantity": "2",
#                                 "category": "PHYSICAL_GOODS"
#                             }
#                         ],
#                         "shipping": {
#                             "method": "United States Postal Service",
#                             "name": {
#                                 "full_name":"John Doe"
#                             },
#                             "address": {
#                                 "address_line_1": "123 Townsend St",
#                                 "address_line_2": "Floor 6",
#                                 "admin_area_2": "San Francisco",
#                                 "admin_area_1": "CA",
#                                 "postal_code": "94107",
#                                 "country_code": "US"
#                             }
#                         }
#                     }
#                 ]
#             }
# result = requests.post(url, json.dumps(data), headers=headers)
# print(result.json())

# url = 'https://api-m.sandbox.paypal.com/v2/checkout/orders/24U144887J130724Y'
# result = requests.get(url,headers=headers)
# print(result.json())