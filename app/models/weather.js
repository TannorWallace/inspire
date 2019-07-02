export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
  }

  get Template() {
    let kelvin = this.kelvin
    let fahrenheit = (kelvin - 273.15) * (9 / 5) + 32


    return `

    		<div class="row d-flex align-items-end"">
			<div class="col-ms-4 >
				<div class="card-body">
					<p>${this.city}: ${Math.round(fahrenheit)} &#176;F</p>
				</div>
			</div>
		</div>

	</div>
    `
  }
}

