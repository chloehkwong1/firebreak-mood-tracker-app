# Generated by Django 4.0.6 on 2022-07-10 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moodtracker', '0003_alter_moodentry_mood_alter_moodentry_mood_influences'),
    ]

    operations = [
        migrations.AlterField(
            model_name='moodentry',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='moodentry',
            name='time',
            field=models.TimeField(auto_now_add=True),
        ),
    ]
