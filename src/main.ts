import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"

import { AppModule } from "./app/app.module"
import { ConfigurationService } from "./configuration/configuration.service"

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	const config = app.get(ConfigurationService)

	await app.listen(config.serverPort)
}

bootstrap()
