{
	"info": {
		"_postman_id": "a37e72b9-39c2-469b-98b7-e5c3de3e4ac8",
		"name": "Node_Final_Test",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "29195117"
	},
	"item": [
		{
			"name": "UserSignup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "userName",
							"value": "Shubhadweep santra",
							"type": "text"
						},
						{
							"key": "email_Id",
							"value": "rohanslife1202@gmail.com",
							"type": "text"
						},
						{
							"key": "password",
							"value": "12345",
							"type": "text"
						},
						{
							"key": "userImage",
							"type": "file",
							"src": [
								"/D:/VS_Code_Works/Images/pngtuserimage2.jpg",
								"/D:/VS_Code_Works/Images/userimg1.jpg"
							]
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/userSignup",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"userSignup"
					]
				}
			},
			"response": []
		},
		{
			"name": "EmailVerification",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "userName",
							"value": "Shubhadweep santra",
							"type": "text"
						},
						{
							"key": "email_Id",
							"value": "rohanslife1202@gmail.com",
							"type": "text"
						},
						{
							"key": "password",
							"value": "12345",
							"type": "text"
						},
						{
							"key": "userImage",
							"type": "file",
							"src": [
								"/D:/VS_Code_Works/Images/pngtuserimage2.jpg",
								"/D:/VS_Code_Works/Images/userimg1.jpg"
							]
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/mailConfirmation/rohanslife1202@gmail.com",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"mailConfirmation",
						"rohanslife1202@gmail.com"
					]
				}
			},
			"response": []
		},
		{
			"name": "UserLogin",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "email_Id",
							"value": "rohanslife1202@gmail.com",
							"type": "text"
						},
						{
							"key": "password",
							"value": "12345",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/userLogin",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"userLogin"
					]
				}
			},
			"response": []
		},
		{
			"name": "GetProfile",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "email_Id",
							"value": "rohanslife1202@gmail.com",
							"type": "text"
						},
						{
							"key": "password",
							"value": "12345",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/GetProfilePage",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"GetProfilePage"
					]
				}
			},
			"response": []
		},
		{
			"name": "EditProfile",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "userName",
							"value": "Rohan Santra",
							"type": "text"
						},
						{
							"key": "email_Id",
							"value": "rohanslife1202@gmail.com",
							"type": "text"
						},
						{
							"key": "password",
							"value": "12345",
							"type": "text"
						},
						{
							"key": "userImage",
							"type": "file",
							"src": [
								"/D:/VS_Code_Works/Images/IcardImage1.jpg",
								"/D:/VS_Code_Works/Images/userimg1.jpg"
							]
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/editProfile/66f503d7a68e759084eb9870",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"editProfile",
						"66f503d7a68e759084eb9870"
					]
				}
			},
			"response": []
		},
		{
			"name": "addProduct",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "productName",
							"value": "Asus Vivobook laptop",
							"type": "text"
						},
						{
							"key": "productPrice",
							"value": "35000",
							"type": "text"
						},
						{
							"key": "productCategory",
							"value": "electronic device",
							"type": "text"
						},
						{
							"key": "productStock",
							"value": "High",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/addProduct",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"addProduct"
					]
				}
			},
			"response": []
		},
		{
			"name": "ListOfProducts",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "productName",
							"value": "Addidas Formal shirt",
							"type": "text"
						},
						{
							"key": "productPrice",
							"value": "1799",
							"type": "text"
						},
						{
							"key": "productCategory",
							"value": "Outerwear garment",
							"type": "text"
						},
						{
							"key": "productStock",
							"value": "1500",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/ListOfProducts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"ListOfProducts"
					]
				}
			},
			"response": []
		},
		{
			"name": "EditProduct",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "productName",
							"value": "Addidas Formal shirt",
							"type": "text"
						},
						{
							"key": "productPrice",
							"value": "1799",
							"type": "text"
						},
						{
							"key": "productCategory",
							"value": "Outerwear garment",
							"type": "text"
						},
						{
							"key": "productStock",
							"value": "1500",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/editProduct/66f51832dec65bb10b68d9a0",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"editProduct",
						"66f51832dec65bb10b68d9a0"
					]
				}
			},
			"response": []
		},
		{
			"name": "AddCategory",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "category_Name",
							"value": "Mens garments",
							"type": "text"
						},
						{
							"key": "category_Id",
							"value": "66f5191adec65bb10b68d9a2",
							"type": "text"
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/addCategory",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"addCategory"
					]
				}
			},
			"response": []
		},
		{
			"name": "LookUp",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "category_Name",
							"value": "Electronic Devices",
							"type": "text"
						},
						{
							"key": "category_Id",
							"value": "66f52e2bef98146f663fac0a",
							"type": "text"
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/mergeProducts_withCategory",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"mergeProducts_withCategory"
					]
				}
			},
			"response": []
		},
		{
			"name": "LowStockProducts",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "category_Name",
							"value": "Fashion accessories",
							"type": "text"
						},
						{
							"key": "category_Id",
							"value": "66f537d5ff6c3c9995c10b98",
							"type": "text"
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/lowStock",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"lowStock"
					]
				}
			},
			"response": []
		},
		{
			"name": "DeleteProduct",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NmY1MDNkN2E2OGU3NTkwODRlYjk4NzAiLCJ1c2VyTmFtZSI6IlNodWJoYWR3ZWVwIHNhbnRyYSIsImVtYWlsX0lkIjoicm9oYW5zbGlmZTEyMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkcGxsOUtLbVFmVzd0QWJNZ1Q1ajgxdWtyS0JtWmR4N1hySnV6TlpYcm1FV3Z1VER6MnNnZG0iLCJ1c2VySW1hZ2UiOlsicG5ndHVzZXJpbWFnZTIuanBnIiwidXNlcmltZzEuanBnIl0sImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NDg6NTUuNDg4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDktMjZUMDY6NTI6MDMuNDA1WiJ9LCJpYXQiOjE3MjczMzM3NTAsImV4cCI6MTcyNzMzNzM1MH0.VineMVxJygSiLabo9AQNGRxbAtEbDgSB0ePC7UII90M",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "productName",
							"value": "Asus Vivobook laptop",
							"type": "text"
						},
						{
							"key": "productPrice",
							"value": "40000",
							"type": "text"
						},
						{
							"key": "productCategory",
							"value": "Computer devices",
							"type": "text"
						},
						{
							"key": "productStock",
							"value": "650",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:5700/deleteProduct/66f525393aa95ddc140de8c6",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5700",
					"path": [
						"deleteProduct",
						"66f525393aa95ddc140de8c6"
					]
				}
			},
			"response": []
		}
	]
}