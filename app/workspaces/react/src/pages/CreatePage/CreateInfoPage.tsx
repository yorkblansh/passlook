export const CreateInfoPage = () => {
	return (
		<div>
			<form action="">
				<label>
					Email
					<input name="email" type="text" />
				</label>
				<label>
					Фамилия
					<input name="surname" type="text" />
				</label>
				<label>
					Имя
					<input name="name" type="text" />
				</label>
				<label>
					Отчество
					<input name="secondName" type="text" />
				</label>
				<label>
					Пароль
					<input name="password" type="text" />
				</label>
				<label>
					Позиция/Должность
					<input name="position" type="text" />
				</label>
				<label>
					Отдел
					<input name="department" type="text" />
				</label>
				<label>
					Пароль приложений
					<input name="appPassword" type="text" />
				</label>
				<label>
					Платформа
					<input name="email" type="text" />
				</label>
			</form>

			<form action="">
				Создать платформу
				<label>
					<input name="name" type="text" />
				</label>
			</form>
		</div>
	)
}
