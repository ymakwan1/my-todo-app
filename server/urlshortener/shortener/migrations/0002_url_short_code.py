# Generated by Django 5.0.7 on 2024-07-16 01:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shortener', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='url',
            name='short_code',
            field=models.CharField(default=1, max_length=8, unique=True),
            preserve_default=False,
        ),
    ]
