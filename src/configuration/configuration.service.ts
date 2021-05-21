import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

@Injectable()
export class ConfigurationService {
	constructor(private configService: ConfigService) {}

	get serverPort(): number {
		return this.configService.get<number>("SERVER_PORT") ?? 8000
	}
}
