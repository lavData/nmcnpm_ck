# Generated by Django 4.0.4 on 2022-05-26 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0003_alter_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20, null=True, unique=True)),
                ('password', models.CharField(max_length=100)),
                ('role', models.CharField(max_length=10)),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
