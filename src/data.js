const data = [
	{
		id: 1,
		name: "Brote Emocional",
		profilePicture: "grupo.jpg",
		backgroundColor: "#FF7777",
		status: "Viva la pizza con anana y queso",
		color: "#FFAAAA",
		categoria: "NIÑEZ",
		chatHistory: [
			{
				author: 'Yo',
				content: '¡Hola, equipo! ¿Cómo están hoy?',
				date: 'Hoy',
				state: 'entregado',
				id: 1
			},
			{
				author: 'Alegría',
				content: '¡Estoy genial! Hoy es un día perfecto para ser feliz. ¿Qué vamos a hacer?',
				date: 'Hoy',
				state: 'entregado',
				id: 2
			},
			{
				author: 'Tristeza',
				content: 'Bueno, no sé. A veces las cosas pueden ser un poco… grises.',
				date: 'Hoy',
				state: 'entregado',
				id: 3
			},
			{
				author: 'Terror',
				content: '¡Oh no! ¿Y si algo sale mal? ¿Y si nos enfrentamos a una situación aterradora? ',
				date: 'Hoy',
				state: 'entregado',
				id: 4
			},
			{
				author: 'Desagrado',
				content: '¡Ugh, no me gusta la idea de ensuciarme o enfrentarme a algo repugnante!',
				date: 'Hoy',
				state: 'entregado',
				id: 5
			},
			{
				author: 'Furia',
				content: '¡Yo estoy listo para cualquier cosa! Si algo nos molesta, ¡simplemente le damos un buen golpe!',
				date: 'Hoy',
				state: 'entregado',
				id: 6
			},
			{
				author: 'Yo',
				content: '¡Perfecto, equipo! ¡Vamos a disfrutar de esta noche!',
				date: 'Hoy',
				state: 'entregado',
				id: 19
			}
		]
	},
	{
		id: 2,
		name: "Alegria",
		profilePicture: "alegria.jpg",
		backgroundColor: "#f0d78a",
		status: "¡Hoy es un gran día para sonreír y ser feliz! 😊🌟",
		color: "#e7e8b4",
		categoria: "NIÑEZ",
		chatHistory: [
			{
				author: 'Yo',
				content: 'Hola, Alegría. ¿Cómo estás?',
				date: 'Hoy a 07:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Alegria',
				content: '¡Hola! Estoy muy bien. ¿Y tú?',
				date: 'Hoy a 07:35',
				state: 'visto',
				id: 2
			},
			{
				author: 'Yo',
				content: 'Un poco cansado, la verdad. ',
				date: 'Hoy a 07:36',
				state: 'visto',
				id: 3
			},
			{
				author: 'Alegria',
				content: 'Entiendo. ¿Qué tal si te tomas un descanso para hacer algo que disfrutes?',
				date: 'Hoy a 07:37',
				state: 'visto',
				id: 4
			},
			{
				author: 'Yo',
				content: 'Me encantaría leer, pero he estado muy ocupado.',
				date: 'Hoy a 07:38',
				state: 'visto',
				id: 5
			},
			{   
				author: 'Alegria',
				content: ' Intenta encontrar un momento para eso, puede ayudarte a relajarte.',
				date: 'Hoy a 07:38',
				state: 'visto',
				id:6
			},
			{
				author: 'Yo',
				content: 'Buena idea, lo haré. Gracias Alegría.',
				date: 'Hoy a 07:39',
				state: 'entregado',
				id: 7
			}
		]
	},
	{
		id: 3,
		name: "Tristeza",
		profilePicture: "tristeza.jpg",
		backgroundColor: "#6482AD",
		status: "A veces, las nubes en el cielo también tienen su lugar. 🌧️",
		color: "#5e729d",
		categoria: "NIÑEZ",
		chatHistory: [
			{
				author: 'Tristeza',
				content: 'Hola, ¿tienes un momento?',
				date: 'hoy a 10:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: 'Hola ¿Qué pasa?',
				date: 'hoy a 10:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Tristeza',
				content: 'Me siento bastante triste hoy. No han salido bien algunas cosas que esperaba..',
				date: 'hoy a 10:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: '¿Te gustaría hablar sobre eso??',
				date: 'hoy a 10:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Tristeza',	
				content : "Sí, creo que hablar puede ayudarme.",
				date: 'hoy a 10:04',
				state: 'visto',
				id: 5
			},
			{
				author: 'Yo',
				content: 'Perfecto',
				date: 'hoy a 10:05',
				state: 'visto',
				id: 6
			},
			{
				author: 'Tristeza',
				content: 'Era una tarde nubada de 1967',
				date: 'hoy a 10:06',
				state: 'visto',
				id: 7
			}
		]
	},
	{
		id: 4,
		name: "Furia",
		profilePicture: "furia.jpg",
		backgroundColor: "#B43F3F",
		status: "Estoy tan enojado que hasta mi café está temblando. 😱",
		color: "#BB6464",
		categoria: "NIÑEZ",
		chatHistory: [
			{
				author: 'Furia',
				content: ' Estoy realmente furioso.',
				date: 'hoy a 12:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: 'Por qué?',
				date: 'hoy a 12:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Furia',
				content: 'Nos robaron en el partido con River',
				date: 'hoy a 12:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: 'Si yo tambien lo vi, me senti muy furioso.',
				date: 'hoy a 12:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Furia',
				content: 'Queres que te pase a buscar?',
				date: 'hoy a 12:03',
				state: 'visto',
				id: 5
			},
			{
				author: 'Yo',
				content: 'y que vamos a hacer?',
				date: 'hoy a 12:04',
				state: 'entregado',
				id: 6
			},
			{
				author: 'Furia',
				content: 'Vayamos a romper el McDonals del Obelisco',
				date: 'hoy a 12:05',
				state: 'entregado',
				id: 7
			},
		]
	},
	{
		id: 5,
		name: "Temor",
		profilePicture: "temor.jpg",
		backgroundColor: "#987D9A",
		status: "Si ves a alguien huyendo sin motivo, soy yo. 🏃‍♂️😅",
		color: "#b69cc3",
		categoria: "NIÑEZ",
		chatHistory: [
			{
				author: 'Temor',
				content: 'No puedo dejar de sentir que algo terrible está a punto de pasar',
				date: 'hoy a 14:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: '¿Qué es lo que te está asustando?',
				date: 'hoy a 14:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Temor',
				content: ' No se, tengo una sensación de pánico que no se va.',
				date: 'hoy a 14:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: 'Intenta ponerte una musica relajante',
				date: 'hoy a 14:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Yo',
				content: 'o un te de tilo',
				date: 'hoy a 14:03',
				state: 'visto',
				id: 5
			},
			{
				author: 'Yo',
				content: 'o meditar, escuche que funciona',
				date: 'hoy a 14:03',
				state: 'visto',
				id: 6
			},
			{
				author: 'Temor',
				content: 'Lo voy a intentar, gracias',
				date: 'hoy a 14:04',
				state: 'visto',
				id: 7
			},
		]
	},
	{
		id: 6,
		name: "Desagrado",
		profilePicture: "desagrado.jpg",
		backgroundColor: "#6C946F",
		status: "Mi cara cuando alguien menciona pizza con anana: 😒🍕",
		color: "#d5f1c6",
		categoria:"NIÑEZ",
		chatHistory: [
			{
				author: 'Desagrado',
				content: 'No estoy muy seguro sobre tu outfit para la fiesta.',
				date: 'sabado a 14:00',
				state: 'visto',
				id: 1
			},
			{
				author: 'Yo',
				content: 'Porque?',
				date: 'sabado a 14:01',
				state: 'visto',
				id: 2
			},
			{
				author: 'Desagrado',
				content: 'Bueno, el color y el estilo parecen un poco fuera de lugar para la ocasión.',
				date: 'sabado a 14:02',
				state: 'visto',
				id: 3
			},
			{
				author: 'Yo',
				content: '¿Que puedo cambiar?',
				date: 'sabado a 14:03',
				state: 'visto',
				id: 4
			},
			{
				author: 'Desagrado',
				content: 'Capaz un color mas neutral y un estilo mas casual.',
				date: 'sabado a 14:05',
				state: 'visto',
				id: 5
			},
			{
				author: 'Yo',
				content: 'Dale, ahora lo cambio, gracias.',
				date: 'sabado a 14:05',
				state: 'visto',
				id: 6
			},
			{
				author: 'Desagrado',
				content: 'Denada, si hay pizza con Anana, NO LA COMAS!!',
				date: 'sabado a 14:05',
				state: 'visto',
				id: 7
			},
		],
	},
			{
				id: 7,
				name: "Ansiedad",
				profilePicture: "ansiedad.jpg",
				backgroundColor: "#FF8343",
				status: "Si alguien encuentra mi paz interior, por favor, devuélvanla. Estaba aquí hace un minuto.",
				color: "#FFEEAD",
				categoria: "PUBERTAD", 
				chatHistory: [
					{
						author: 'Yo',
						content: 'Mi vida es un capítulo de una novela dramática.',
						date: 'hoy a 07:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Ansiedad',
						content: '¿En qué episodio estás? ¿El de “Mi jefe odia a los gatos” o “La nevera se ha convertido en un agujero negro”?',
						date: 'hoy a 07:01',
						state: 'visto',
						id: 2
					},
					{
						author: 'Yo',
						content: 'Definitivamente el de “Los problemas vienen en camiones”',
						date: 'hoy a 07:01',
						state: 'visto',
						id: 3
					},
					{
						author: 'Ansiedad',
						content: '¡Genial! Solo me falta hacer una entrada dramática',
						date: 'hoy a 07:05',
						state: 'visto',
						id: 4
					},
					{
						author: 'Yo',
						content: 'No estoy seguro si eso ayudará con mi estrés o solo aumentará el desorden.',
						date: 'hoy a 07:06',
						state: 'visto',
						id: 5
					},
					{
						author: 'Ansiedad',
						content: 'Siempre puedo ofrecerte un karaoke para desahogarte.',
						date: 'hoy a 07:06',
						state: 'visto',
						id: 6
					},
					{
						author: 'Yo',
						content: '¡Perfecto! Solo si prometes no grabarlo para la eternidad.',
						date: 'hoy a 07:07',
						state: 'visto',
						id: 7
					},
					{
						author: 'Ansiedad',
						content: '¡Prometido!',
						date: 'hoy a 07:07',
						state: 'visto',
						id: 6
					}
				]
			},
			{
				id: 8,
				name: "Verguenza",
				profilePicture: "verguenza.jpg",
				backgroundColor: "#F0A8D0",
				status: "Mis momentos vergonzosos son tan épicos que deberían tener su propio canal de televisión. 📺😆",
				color: "#EECAD5",
				categoria: "PUBERTAD",
				chatHistory: [
					{
						author: 'Verguenza',
						content: '¡Hola! te acordas cuando bailaste en público como si nadie te estuviera viendo. 💃😳',
						date: 'hoy a 03:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Yo',
						content: '¿Por qué tienes que sacar el tema ahora?',
						date: 'hoy a 03:01',
						state: 'visto',
						id: 2
					},
					{
						author: 'Verguenza',
						content: ' Porque es mi trabajo recordarte los recuerdos incómodos. ¡Y hoy estoy en modo “flashback”!',
						date: 'sabado a 03:02',
						state: 'visto',
						id: 3
					},
					{
						author: 'Yo',
						content: 'Estoy tratando de mantener mi dignidad intacta.',
						date: 'hoy a 03:03',
						state: 'visto',
						id: 4
					},
					{
						author: 'Verguenza',
						content: '¿Dignidad? ¡Eso es tan pasado de moda!',
						date: 'hoy a 03:05',
						state: 'visto',
						id: 5
					},
					{
						author: 'Yo',
						content: 'Pero al menos no estes en mi próxima videollamada',
						date: 'hoy a 03:05',
						state: 'visto',
						id: 6
					},
					{
						author: 'Verguenza',
						content: 'No prometo nada! ',
						date: 'hoy a 03:06',
						state: 'visto',
						id: 7
					}
				]
			},
			{
				id: 9,
				name: "Envidia",
				profilePicture: "envidia.jpg",
				backgroundColor: "#36C2CE",
				status: "Mi envidia tiene envidia de mi paciencia 😜",
				color: "#91DDCF",
				categoria: "PUBERTAD",
				chatHistory: [
					{
						author: 'Yo',
						content: '¡Estoy celoso del nuevo coche de mi amigo!',
						date: 'hoy a 15:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Envidia',
						content: 'Encantada de hacerte sentir como si tu coche fuera un carrito de supermercado.',
						date: 'hoy a 15:01',
						state: 'visto',
						id: 2
					},
					{
						author: 'Yo',
						content: '¡No es justo! ¿Qué hago para no sentirme así?',
						date: 'hoy a 15:02',
						state: 'visto',
						id: 3
					},
					{
						author: 'Envidia',
						content: '¿Qué tal si le pones unas ruedas nuevas y lo llamas "edición limitada"? ',
						date: 'hoy a 15:03',
						state: 'visto',
						id: 4
					},
					{
						author: 'Yo',
						content: '¡Buena idea! Lo llamaré "Classic Deluxe". ¡Gracias, Envidia!',
						date: 'hoy a 15:04',
						state: 'visto',
						id: 5
					},
					{
						author: 'Envidia',
						content: 'Seguiré esperando mi próximo gran drama',
						date: 'hoy a 15:06',
						state: 'visto',
						id: 6
					},
				]
			},
			{
				id: 10,
				name: "Aburrimiento",
				profilePicture: "aburrimiento.jpg",
				backgroundColor: "#577B8D",
				status: "Mi aburrimiento está en modo ‘superhéroe’. ¡Mi superpoder es convertir cualquier actividad en una siesta!",
				color: "#508C9B",
				categoria: "PUBERTAD",
				chatHistory: [
					{
						author: 'Aburrimiento',
						content: '¿Preparado para una fiesta de sofá?',
						date: 'hoy a 18:00',
						state: 'visto',
						id: 1
					},
					{
						author: 'Yo',
						content: '¡Oh, genial! ¿Qué plan tienes para hoy, aparte de hacerme sentir como un cactus en una sala de espera?',
						date: 'hoy a 18:00',
						state: 'visto',
						id: 2
					},
					{
						author: 'Aburrimiento',
						content: 'Pensaba en un maratón de mirar cómo el reloj avanza lentamente.',
						date: 'hoy a 18:02',
						state: 'visto',
						id: 3
					},
					{
						author: 'Yo',
						content: '¿Dónde firmo para escapar de esta fiesta?',
						date: 'hoy a 18:03',
						state: 'visto',
						id: 4
					},
					{
						author: 'Aburrimiento',
						content: 'Tranquilo, podes contar las telarañas en las esquinas. ¡Es una búsqueda del tesoro!',
						date: 'hoy a 18:05',
						state: 'visto',
						id: 5
					},
					{
						author: 'Yo',
						content: 'Creo que prefiero ver crecer el pasto',
						date: 'hoy a 18:05',
						state: 'visto',
						id: 6
					},
					{
						author: 'Aburrimiento',
						content: 'Me quedaré aquí en modo "inactividad máxima"',
						date: 'hoy a 18:05',
						state: 'visto',
						id: 7
					}
				]
			}
		]
				
	




export default data;
